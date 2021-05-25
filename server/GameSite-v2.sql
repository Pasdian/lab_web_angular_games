CREATE DATABASE game_site_db;

USE game_site_db;

-- ############################################
DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `gameID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `gameName` varchar(64) NOT NULL,
  `developer` varchar(45) NOT NULL,
  `releaseDate` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  `consoleID` varchar(45) NOT NULL
  -- PRIMARY KEY (`gameID`)
);

DROP TABLE IF EXISTS `consoles`;
CREATE TABLE `consoles` (
  `consoleID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `consoleName` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `features` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL
  -- PRIMARY KEY (`consoleID`)
);

CREATE TABLE `Blog_Entries` (
  `entryID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `entryDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `username` VARCHAR(10) NOT NULL,
  `entryText` VARCHAR(140)
);

CREATE TABLE `users`(
  `userID` INT NOT NULL PRIMARY KEY,
  `name` VARCHAR(25),
  `firstLastName` VARCHAR(25),
  `secondLastName` VARCHAR(25),
  `password` VARCHAR(25) NOT NULL
);

-- ############################################
-- CONSOLES INSERTS
insert into consoles (consoleName, description, features, image)
values (
    "Xbox",
    "Flasgship console from Microsoft",
    "4K output, 48Hz refresh rate",
    "https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg"
  );
insert into consoles (consoleName, description, features, image)
values (
    "PlayStation",
    "Flasgship console from Sony",
    "Exclusive games, slick design",
    "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg"
  );
insert into consoles (consoleName, description, features, image)
values (
    "Nintendo Switch",
    "Flasgship console from Nintendo",
    "Mario Franchise, Portable",
    "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
  );
-- GAMES INSERTS
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Mario Kart",
    "Nintendo",
    "2014",
    "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._AC_SL1500_.jpg",
    "3"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Animal Crossing: New Horizons",
    "Nintendo",
    "2020",
    "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg",
    "3"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "The Legend of Zelda: Breath of the Wild",
    "Nintendo",
    "2017",
    "https://howlongtobeat.com/games/38019_The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    "3"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "FIFA 2021",
    "Electronic Arts",
    "2020",
    "https://cdn1.coppel.com/images/catalog/pm/2780143-1.jpg",
    "3"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Call of Duty: Black Ops Cold War",
    "Treyarch and Raven Software",
    "2020",
    "https://images-na.ssl-images-amazon.com/images/I/81iKZVBfD7L._AC_SL1500_.jpg",
    "2"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Marvel's Spider-Man: Miles Morales",
    " Insomniac Games",
    "2020",
    "https://images-na.ssl-images-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg",
    "2"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "DOOM Eternal",
    "id Software",
    "2020",
    "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png",
    2
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Resident Evil Village",
    "Capcom",
    "2021",
    "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png",
    2
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Call of Duty: Black Ops Cold War",
    "Treyarch and Raven Software",
    "2020",
    "https://images-na.ssl-images-amazon.com/images/I/814z4KAsOcL._AC_SX466_.jpg",
    "1"
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Halo Infinite",
    "343 Industries",
    "2021",
    "https://s3.megabrandsmedia.com/2020/08/01/16/05/33/r/600x450/XGZMFr4KQm1596312333.jpeg",
    1
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "CyberPunk 2077",
    "CD Projekt",
    "2020",
    "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    1
  );
INSERT INTO games (
    gameName,
    developer,
    releaseDate,
    image,
    consoleID
  )
VALUES (
    "Minecraft",
    "Mojang",
    "2011",
    "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    "1"
  );
-- Users INSERTS
INSERT into users (
    userID,
    name,
    firstLastName,
    secondLastName,
    password
  )
values (
    84560,
    "Roberto",
    "Tellez",
    "Perezyera",
    "fur-fox-sake"
  );
INSERT into users (
    userID,
    name,
    firstLastName,
    secondLastName,
    password
  )
values (39290, "Irving", "Fuentes", "Aguilera", "admin");
INSERT into users (
    userID,
    name,
    firstLastName,
    secondLastName,
    password
  )
values (11391, "Javier", "Pascal", "Flores", "baconPancakes");

-- ############################################
UPDATE users
SET userID = 84560
WHERE userID = 1;

UPDATE users
SET userID = 39290
WHERE userID = 2;

UPDATE users
SET userID = 11391
WHERE userID = 3;

-- ############################################
-- test and validate contents
SELECT * FROM `games` LIMIT 50;

SELECT * FROM `consoles` LIMIT 50;

SELECT * FROM `Blog_Entries` LIMIT 50;

SELECT * FROM `users` LIMIT 3;
