SELECT * FROM game_site_db.consoles;

SELECT * FROM game_site_db.games;

-- CREATE TABLES

CREATE TABLE `games` (
  `gameID` varchar(45) NOT NULL,
  `gameName` varchar(15) NOT NULL,
  `developer` varchar(45) NOT NULL,
  `releaseDate` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  `consoleID` varchar(45) NOT NULL,
  PRIMARY KEY (`gameID`)
)

CREATE TABLE `consoles` (
  `consoleID` varchar(45) NOT NULL,
  `consoleName` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `features` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`consoleID`)
)

-- CONSOLES INSERTS

insert into consoles (consoleID, consoleName, description, features, image)
values ("1", "Xbox", "Flasgship console from Microsoft", "4K output, 48Hz refresh rate", "https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg");

insert into consoles (consoleID, consoleName, description, features, image)
values ("2", "PlayStation", "Flasgship console from Sony", "Exclusive games, slick design", "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg");

insert into consoles (consoleID, consoleName, description, features, image)
values ("3", "Nintendo Switch", "Flasgship console from Nintendo", "Mario Franchise, Portable", "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg");

-- GAMES INSERTS

INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("1", "Mario Kart", "Nintendo", "2014",  "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._AC_SL1500_.jpg", "3");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("2", "Animal Crossing: New Horizons", "Nintendo", "2020", "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg", "3");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("3", "The Legend of Zelda: Breath of the Wild", "Nintendo", "2017", "https://howlongtobeat.com/games/38019_The_Legend_of_Zelda_Breath_of_the_Wild.jpg", "3");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("5", "FIFA 2021", "Electronic Arts", "2020", "https://cdn1.coppel.com/images/catalog/pm/2780143-1.jpg", "3");

INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("4", "Call of Duty: Black Ops Cold War", "Treyarch and Raven Software", "2020", "https://images-na.ssl-images-amazon.com/images/I/81iKZVBfD7L._AC_SL1500_.jpg", "2");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("6", "Marvel's Spider-Man: Miles Morales", " Insomniac Games", "2020", "https://images-na.ssl-images-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg", "2");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("7", "DOOM Eternal", "id Software", "2020", "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("8", "Resident Evil Village", "Capcom", "2021", "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png");

INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("9", "Call of Duty: Black Ops Cold War", "Treyarch and Raven Software", "2020", "https://images-na.ssl-images-amazon.com/images/I/814z4KAsOcL._AC_SX466_.jpg", "1");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("10", "Halo Infinite", "343 Industries", "2021", "https://s3.megabrandsmedia.com/2020/08/01/16/05/33/r/600x450/XGZMFr4KQm1596312333.jpeg");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("11", "CyberPunk 2077", "CD Projekt", "2020", "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg");
INSERT INTO consoles (gameID, gameName, developer, releaseDate, image, consoleID)
VALUES ("12", "Minecraft", "Mojang", "2011", "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png", "1");