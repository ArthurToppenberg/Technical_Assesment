import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma';

const apiPrefix = 'https://oda.ft.dk/api/Sag';

const filters = {
    typeid: ['3', '5', '9'],
    periodeid: '160',
};

const queryString = Object.entries(filters)
    .map(([key, value]) => {
        if (Array.isArray(value)) {
            return value.map((v) => `${key} eq ${v}`).join(' or ');
        }
        return `${key} eq ${value}`;
    })
    .join(' and ');

const apiPath = `${apiPrefix}?$filter=${encodeURIComponent(queryString)}`;
//Example: https://oda.ft.dk/api/Sag?$filter=typeid eq 3 or typeid eq 5 or typeid eq 9 and periodeid eq 160
//const apiPath = `${apiPrefix}`

interface OdaData {
    value: Law_Danish[];
}

/**
 * The paramiters describing a law from the Danish Parliament API.
 * The class excludes the properties with danish characters in its name.
 */
class Law_Paramiters {
    typeid: number = 0;
    kategoriid: number = 0;
    statusid: number = 0;
    titel?: string = "";
    titelkort?: string = "";
    offentlighedskode?: string = "";
    nummer: string = "";
    nummerprefix: string = "";
    nummernumerisk: string = "";
    nummerpostfix: string = "";
    resume?: string = "";
    afstemningskonklusion?: string = "";
    periodeid: number = 0;
    baggrundsmateriale?: string = "";
    opdateringsdato?: string = "";
    statsbudgetsag?: boolean = false;
    begrundelse?: string = "";
    paragrafnummer?: string = "";
    paragraf?: string = "";
    lovnummer?: string = "";
    lovnummerdato?: string = "";
    retsinformationsurl?: string = "";
    fremsatundersagid?: string = "";
    deltundersagid?: number = 0;
}

/**
 * The paramiters describing a law from the Danish Parliament API in Danish.
 */
class Law_Danish_Paramiters extends Law_Paramiters {
    afgørelsesresultatkode?: string = "";
    afgørelsesdato?: string = "";
    afgørelse?: string = "";
    rådsmødedato?: string = "";
}

/**
 * The paramiters describing a law from the Danish Parliament API in English.
 */
export class Law_English_Paramiters extends Law_Paramiters {
    afgoerelsesresultatkode?: string = "";
    afgoerelsesdato?: string = "";
    afgoerelse?: string = "";
    raadsmoededato?: string = "";
}

/**
 * Interface for a law from the Danish Parliament API in Danish.
 */
export interface Law_Danish extends Law_Danish_Paramiters {};

/**
 * Interface for a law from the Danish Parliament API in English.
 */
export interface Law_English extends Law_English_Paramiters {};

/**
 * Retrieves data from the Danish Parliament API from a specified path.
 *
 * @param path - The API endpoint to retrieve data from.
 * @returns A promise that resolves to the retrieved data in JSON format.
 * @throws An error if the data retrieval fails.
 */
async function GetOdaData(path: string): Promise<OdaData> {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}, path: ${decodeURIComponent(path)}`);
    }
    return response.json() as Promise<OdaData>;
}

/**
 * Converts the parameter names of the laws from Danish to English.
 * @param lawsDanish The list of laws to convert.
 * @returns The list of laws with the parameter names converted to English.
 */
function ConvertDanishToEnglish(lawsDanish: Law_Danish[]): Law_English[] {
    return lawsDanish.map(law => ({
        ...law,
        afgoerelsesresultatkode: law.afgørelsesresultatkode,
        afgoerelsesdato: law.afgørelsesdato,
        afgoerelse: law.afgørelse,
        raadsmoededato: law.rådsmødedato,
    }));
}

/**
 * Strips the JSON object of all keys that are not in the specified array.
 * @param json The JSON array of objects to strip.
 * @param keys The keys to keep in the JSON object.
 * @returns The JSON object with only the specified keys.
 * @throws An error if the any JSON object is not an object.
 */
function StripJSON(array: any[], keys: string[]): any {
    array.forEach(json => {
        if (typeof json !== 'object') {
            throw new Error('The JSON object is not an object.');
        }
        Object.keys(json).forEach(key => {
            if (!keys.includes(key)) {
                delete json[key];
            }
        });
    });
    return array;
}

/**
 * Upsert the laws into the database, where unique identifier is the "nummer" field.
 * Interates through the laws and upserts them into the database.
 * @param laws The laws to insert into the database.
 * @returns A promise that resolves when all upserts are completed.
 */
async function UpsertLaws(laws: Law_English[]): Promise<void> {
    const upsertPromises = laws.map((law: Law_English) => {
        if (!law.nummer) {
            console.warn('The law does not have a nummer field. Skipping');
            return Promise.resolve();
        }
        if(!law.kategoriid){
            console.warn('The law does not have a kategoriid field. Skipping');
            return Promise.resolve();
        }
        return prisma.laws.upsert({
            where: { nummer: law.nummer },
            update: law,
            create: law,
        });
    });

    await Promise.all(upsertPromises);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        GetOdaData(apiPath)
            .then((response) => {
                
                const lawsDanish: Law_Danish[] = response.value;

                const lawsEnglish: Law_English[] = ConvertDanishToEnglish(lawsDanish);

                type lawsEnglishType = Array<keyof Law_English>;
                const lawsEnglishkeys: lawsEnglishType = Object.keys(new Law_English_Paramiters()) as lawsEnglishType;

                const lawsEnglishStripped = StripJSON(lawsEnglish, lawsEnglishkeys);

                UpsertLaws(lawsEnglishStripped)
                    .then(() => {
                        res.status(200).json({ message: 'Laws updated successfully.' });
                    })
                    // .catch((error) => {
                    //     res.status(500).json({ message: error.message });
                    // });
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export { Law_Danish_Paramiters };