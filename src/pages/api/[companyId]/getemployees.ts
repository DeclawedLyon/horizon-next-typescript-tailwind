import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const companyId = req.query.companyId ? Number(req.query.companyId) : 1;
  try {
    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getAllSchedulesByCompanyId = async (company: number) => {
      let test = company;
      const db = await openDb()
      const employeeSchedules = await db.all(`SELECT a.*, b.* FROM Users 
      as a LEFT JOIN Companies as b
      ON a.companyId = b.id
      WHERE a.companyId = ${company}
      `)
      return employeeSchedules
    }
    return getAllSchedulesByCompanyId(companyId).then(employeeSchedules => res.send(employeeSchedules))
  }
  catch {

  }
}