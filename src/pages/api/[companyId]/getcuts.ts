import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default function getAllCuts(req: NextApiRequest, res: NextApiResponse) {
  const companyId = '1';
  // console.log('test', companyId)
  try {
    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getAllSchedulesByCompanyId = async (company: any) => {
      const db = await openDb()
      const employeeSchedules = await db.all(`SELECT a.*, b.* FROM Cuts 
      as a LEFT JOIN Companies as b
      ON a.ownerId = b.id
      WHERE a.ownerId = ${company}
      `)
      const test = await db.all(`SELECT * FROM Cuts as a
      WHERE a.ownerId = "${1}"`)
      console.log(employeeSchedules)
      return test
    }
    return getAllSchedulesByCompanyId(companyId).then(employeeSchedules => res.send(employeeSchedules))
  }
  catch {

  }
}