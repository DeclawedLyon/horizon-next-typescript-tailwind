import { NextApiRequest, NextApiResponse } from "next";

export default function getAllCuts(req: NextApiRequest, res: NextApiResponse) {
  res.send([
    {
      id: 1,
      cutName: 'colville'
    },
    {
      id: 2,
      cutName: 'naden'
    }
  ])
}