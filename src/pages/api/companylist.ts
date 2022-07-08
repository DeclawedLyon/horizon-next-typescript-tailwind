import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default function getAllCuts(req: NextApiRequest, res: NextApiResponse) {
  // return res.send({
  //   test: 'test'
  // })
  try {
    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getAllCompanies = async () => {
      const db = await openDb();
      const getCompanies = await db.all(`SELECT * FROM Companies`)
      return getCompanies
    }
    return getAllCompanies().then(companies => res.status(200).send(companies))
  }
  catch(err) {

  }
}