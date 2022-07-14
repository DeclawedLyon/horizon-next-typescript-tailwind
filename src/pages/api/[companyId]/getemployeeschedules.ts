import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

const administratorPage = (req: NextApiRequest, res: NextApiResponse) => {
  const companyId = Number(req.query.companyId)

  try {
    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getAllSchedulesByCompanyId = async (company: number) => {
      const db = await openDb()
      const employeeSchedules = await db.all(`SELECT a.id, a.userName, b.* FROM Users 
      as a LEFT JOIN Schedules as b
      ON a.id = b.ownerId
      WHERE a.companyId = ${company}
      `)
      return employeeSchedules
    }
    return getAllSchedulesByCompanyId(companyId).then(employeeSchedules => res.send(employeeSchedules))
  }
  catch(err) {
    // if (err && err.error === 'SQLITE_CANTOPEN') {
      // Handle your error here
    res.send(err)
  }
}

export default administratorPage