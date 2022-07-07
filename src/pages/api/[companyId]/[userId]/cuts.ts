import { NextApiRequest, NextApiResponse } from "next";

export default function getUserCutList(req: NextApiRequest, res: NextApiResponse) {
  res.send({
    message: `testing: ${req.query.id}`
  })
}