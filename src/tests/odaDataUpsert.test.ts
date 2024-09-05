import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/odaDataUpsert';

// describe('handler', () => {
//     let mockRequest: Partial<NextApiRequest>;
//     let mockResponse: Partial<NextApiResponse>;

//     beforeEach(() => {
//         mockRequest = {};
//         mockResponse = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn(),
//             setHeader: jest.fn(),
//             end: jest.fn(),
//         };
//     });

//     it('should handle other HTTP methods and return status 405', async () => {
//         mockRequest.method = 'PUT';

//         await handler(mockRequest as NextApiRequest, mockResponse as NextApiResponse);

//         expect(mockResponse.setHeader).toHaveBeenCalledWith('Allow', ['GET']);
//         expect(mockResponse.status).toHaveBeenCalledWith(405);
//         expect(mockResponse.end).toHaveBeenCalledWith('Method PUT Not Allowed');
//     });
// });
