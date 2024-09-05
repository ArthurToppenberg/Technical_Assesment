import { NextApiRequest, NextApiResponse } from 'next';
import { Law_English } from './odaDataUpsert';

import prisma from '../../utils/prisma';

export enum LawStatus {
    Forkastet = 3,
    Vedtaget = 11,
}

/**
 * Inteface used to specify which laws to get.
 */
export interface getLawsProps{
    LawStatusType: LawStatus;
}


export interface Laws_English_Data extends Law_English{
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data: getLawsProps = req.body;
        console.log(data.LawStatusType);
        getLaws(data)
            .then((laws) => {
                res.status(200).json(laws);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    }
}