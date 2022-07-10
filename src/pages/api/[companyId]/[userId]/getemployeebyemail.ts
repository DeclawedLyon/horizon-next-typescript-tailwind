import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

const testArr = [
  {
    phrase: 'phrase1',
    words: 'words1'
  },
  {
    phrase: 'phrase2',
    words: 'words2'
  },
  {
    phrase: 'phrase3',
    words: 'words3'
  },
  {
    phrase: 'phrase4',
    words: 'words4'
  },
  {
    phrase: 'phrase5',
    words: 'words5'
  },
]
export interface ArrayKeys {
  id: number,
  userName: string,
  companyId: number,
  userPassword: string,
  companyName: string,
  companyEmail: string,
  companyPassword: string
}

export default async function getEmployeeByEmail(req: NextApiRequest, res: NextApiResponse) {
  const company = req.query.companyId;
  const emailAddress = req.query.userId;
  const test = 'test@test.com'
  console.log('email: ', emailAddress)
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
      // WHERE a.email = "test@test.com"
      return employee
      // ${'WHERE a.email = "test@test.com"' /*'WHERE a.userName = ${`"Declan"`}'*/}
      // const mapped = employee.map((arr: ArrayKeys) => {
      //   return {
      //     userName: arr.userName,
      //     userPassword: arr.userPassword
      //   }
      // })
      // return mapped
    }
    // return res.send({words: 'words'})
    return getLoginInfo(company, emailAddress).then(e => res.send(e))
  }
  catch(e) {
    // console.log(emailAddress)
    // console.log(e)
  }
}