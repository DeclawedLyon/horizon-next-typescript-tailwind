const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
// import test from './src/migrations'

async function openDb() {
  return sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./src/migrations", //add cutom path to your migrations
    force: "last",
  });

  const users = await db.all("SELECT * FROM Users");
  const schedules = await db.all("SELECT * FROM Schedules");
  // console.log('All Users', JSON.stringify(users, null, 2));
  // console.log('All Schedules', JSON.stringify(schedules, null, 2))

  const userSchedules = await db.all(`SELECT a.*, b.* FROM Users as a
  LEFT JOIN Schedules as b
  ON a.id = b.ownerId
  `);
  console.log("all schedules", JSON.stringify(userSchedules, null, 2));
}

const getUserSchedules = async (userId, date) => {
  const db = await openDb();

  const userSchedules = await db.all(`SELECT a.*, b.* FROM Users as a
  LEFT JOIN Schedules as b
  ON a.id = b.ownerId
  `);
};

setup();
