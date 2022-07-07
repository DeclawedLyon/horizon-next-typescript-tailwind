import { NextApiRequest, NextApiResponse } from "next";

export default function getUserTasks(req: NextApiRequest, res: NextApiResponse) {
  res.send({
    message: `testing: ${req.query.id}`
  })
}