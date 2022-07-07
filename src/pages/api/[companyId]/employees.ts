import { NextApiRequest, NextApiResponse } from "next";

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
  res.send([
    {
      id: 1,
      userName: 'Declan'
    },
    {
      id: 2,
      userName: 'Tara'
    }
    ])
}