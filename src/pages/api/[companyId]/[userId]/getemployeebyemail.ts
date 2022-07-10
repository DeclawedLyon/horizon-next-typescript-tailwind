import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

export default async function getEmployeeByEmail(req: NextApiRequest, res: NextApiResponse) {
  const company = req.query.companyId;
  const emailAddress = req.query.userId;
  try {
    const openDb = async function() {
      return sqlite.open({
        filename: "./database.sqlite",
        driver: sqlite3.Database,
      });
    }
    const getLoginInfo = async (currentCompany: string | string[] | undefined, userEmail: string | string[] | undefined) => {
      if (currentCompany === undefined) return res.send({error: 'Please enter a username and password'})
      const db = await openDb()
      const employee = await db.all(`SELECT a.userName, a.email, a.userPassword FROM Users as 
      a LEFT JOIN Companies as b
      ON a.companyId = b.id
      WHERE a.email = "${emailAddress}"
      `)
      return employee
    }
    return getLoginInfo(company, emailAddress).then(e => res.send(e))
  }
  catch(e) {
    console.error(e)
  }
}