import { NextApiRequest, NextApiResponse } from "next";

export default function getCutById(req: NextApiRequest, res: NextApiResponse) {
  const cutId = req.query.cutId
  return res.send({
    response: `fetching cut #${cutId}`
  })
}