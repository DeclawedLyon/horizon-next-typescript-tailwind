import { NextApiRequest, NextApiResponse } from "next";

export default function gutCutsByUser(req: NextApiRequest, res: NextApiResponse) {
  return res.send({
    message: `testing: ${req.query.id}`
  })
}