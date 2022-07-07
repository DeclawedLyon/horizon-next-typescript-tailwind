import { NextApiRequest, NextApiResponse } from "next";


export default function getCutList(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    id: 1,
    name: 'colville',
    message: `fetching ${req.query.cutList}`,
    polygons: ['test']
  })
}