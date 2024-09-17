import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../utils/prisma'; // Adjust the import according to your project structure
import { Law_English } from './odaDataUpsert';

export enum LawStatus {
    Forkastet = 3,
    Vedtaget = 11,
}

/**
 * Inteface used to specify which laws to get.
 */
export interface getLawsProps {
    LawStatusType: LawStatus;
}

/**
 * The data retrived from the database contains id collumn
 */
export interface Laws_English_Data extends Law_English {
    id: number;
}

/**
 * Gets laws data from the database using prisma.
 * @param data - The data to get.
 * @returns Promise of an array of Law_English_Data
 */
function getLaws(props: getLawsProps): Promise<Laws_English_Data[]> {
    return prisma.laws.findMany({
        where: {
            statusid: props.LawStatusType,
        },
    }) as Promise<Laws_English_Data[]>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const data: getLawsProps = req.body;
            if (!data || !data.LawStatusType) {
                res.status(400).json({ message: 'Invalid request body' });
                return;
            }

            const laws = await getLaws(data);
            res.status(200).json(laws);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}