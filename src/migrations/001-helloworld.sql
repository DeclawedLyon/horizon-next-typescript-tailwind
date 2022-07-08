-- Up

-- CREATE TABLES 

CREATE TABLE IF NOT EXISTS Users (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  userName TEXT NOT NULL,
  email TEXT,
  companyId INTEGER NOT NULL REFERENCES Companies(id),
  userPassword TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Companies (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  companyName TEXT NOT NULL,
  companyEmail TEXT NOT NULL,
  companyPassword TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Cuts (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  locationName TEXT NOT NULL,
  lastCut TEXT NOT NULL,
  class TEXT NOT NULL,
  cutPeriod TEXT NOT NULL,
  cutType TEXT NOT NULL,
  cutStatus TEXT,
  ownerId INTEGER NOT NULL REFERENCES Companies(id) 
);

CREATE TABLE IF NOT EXISTS Schedules (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  nickname TEXT NOT NULL,
  startTime INTEGER NOT NULL,
  endTime INTEGER NOT NULL,
  cutId REFERENCES Cuts(id),
  taskId REFERENCES Tasks(id),
  date TEXT NOT NULL,
  status TEXT NOT NULL,
  ownerId INTEGER NOT NULL REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Tasks (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  taskName TEXT NOT NULL,
  taskDescription TEXT
);

CREATE TABLE IF NOT EXISTS CutCoordinates (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  lat DECIMAL NOT NULL,
  lng DECIMAL NOT NULL,
  position INTEGER NOT NULL,
  ownerId INTEGER NOT NULL REFERENCES Cuts(id)
);

-- SEED DATABASE 
INSERT INTO Companies (companyName, companyEmail, companyPassword) VALUES ('Horizon', 'horizon@test.com', '1234');
INSERT INTO Companies (companyName, companyEmail, companyPassword) VALUES ('O-Town Cuts', 'o-towncuts@test.com', '1234');
INSERT INTO Companies (companyName, companyEmail, companyPassword) VALUES ('Nurseries Pro', 'nurseriespro@test.com', '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Declan', 'test@test.com', 1, '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Tara', 'test2@test.ca', 1, '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Collin', 'test3@test.co', 1, '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Jason', 'test4@test.org', 1, '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Kate', 'test5@test.io', 1, '1234');
INSERT INTO Users (userName, email, companyId, userPassword) VALUES ('Balthazar', 'testX@test.io', 2, '1234');

INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Commanders House', '0700', '0800', '1', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Harbour Sign', '0800', '0900', '2', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Entrance', '0900', '1000', '3', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Parking Lot', '1000', '1100', '4', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Park', '1100', '1200', '5', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Baseball Field', '1200', '1300', '6', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Entry Parking Lot', '1300', '1400', '7', '', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Back Yard', '1400', '1500', '8', '1', 'July, 19, 2022', 'INCOMPLETE', '1');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Commanders House', '0700', '0800', '11', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Harbour Sign', '0800', '0900', '12', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Entrance', '0900', '1000', '13', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Parking Lot', '1000', '1100', '14', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Park', '1100', '1200', '15', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Baseball Field', '1200', '1300', '16', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Naden Entry Parking Lot', '1300', '1400', '17', '', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Commanders House', '1400', '1500', '18', '2', 'July, 19, 2022', 'INCOMPLETE', '2');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '0700', '0800', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '0800', '0900', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '0900', '1000', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '1000', '1100', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '1100', '1200', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '1200', '1300', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '1300', '1400', '', '', '', 'INCOMPLETE', '4');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Work on C cuts', '1400', '1500', '', '', '', 'INCOMPLETE', '4');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '0700', '0800', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '0800', '0900', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '0900', '1000', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '1000', '1100', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '1100', '1200', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '1200', '1300', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '1300', '1400', '', '', '', 'INCOMPLETE', '3');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ('Mow Government House', '1400', '1500', '', '', '', 'INCOMPLETE', '3');
INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '0700', '0800', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '0800', '0900', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '0900', '1000', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '1000', '1100', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '1100', '1200', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '1200', '1300', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '1300', '1400', '', '', '', 'INCOMPLETE', '5');
-- INSERT INTO Schedules (nickname, startTime, endTime, cutId, taskId, date, STATUS, ownerId) VALUES ("Care for Governer General's Pool", '1400', '1500', '', '', '', 'INCOMPLETE', '5');

-- 'Mow/Trim Naden (Entrance)'
-- 'Mow/Trim Naden (Entrance)'
-- 'Mow/Trim FireHall'
-- 'Mow/Trim FireHall'
-- 'Mow/Trim Colville (Soccer Field)'
-- 'Friends Clean Up'
-- 'Friends Clean Up', 'Lock Up Tools'
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Commanders House', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Harbour Sign', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Entrance', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Parking Lot', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Park', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Baseball Field', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Entry Parking Lot', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Back Yard', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Roadside', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Commanders House', 'July, 29, 2022', 'A', '1 Week', 'Mow', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Harbour Sign', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Entrance', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Parking Lot', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Park', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Baseball Field', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Entry Parking Lot', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Back Yard', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
INSERT INTO Cuts (locationName, lastCut, class, cutPeriod, cutType, cutStatus, ownerId) VALUES ('Naden Roadside', 'July, 29, 2022', 'A', '1 Week', 'Trim', NULL, 1);
-- INSERT INTO CutCoordinates () VALUES ();

-- Down
DROP TABLE Users;
DROP TABLE Schedules;
DROP TABLE Cuts;
DROP TABLE Tasks;