CREATE TABLE end_user (
	id_end_user SERIAL NOT NULL,
	name TEXT,
	lastname TEXT,
	dob DATE,
	email TEXT,
	password TEXT,
	confirmed BOOLEAN,
	token TEXT,
    biography TEXT,
    gravatar TEXT,
	PRIMARY KEY (id_end_user)
);

CREATE TABLE photo (
    id_photo SERIAL NOT NULL,
    url TEXT,
    description TEXT,
    id_end_user INT NOT NULL,
    PRIMARY KEY (id_photo),
    FOREIGN KEY (id_end_user) REFERENCES end_user (id_end_user)
);

CREATE TABLE album (
    id_album SERIAL NOT NULL,
    name TEXT,
    id_end_user INT NOT NULL,
    PRIMARY KEY (id_album),
    FOREIGN KEY (id_end_user) REFERENCES end_user (id_end_user)
);

CREATE TABLE photo_album (
    id_photo INT NOT NULL,
    id_album INT NOT NULL,
    PRIMARY KEY (id_photo, id_album),
    FOREIGN KEY (id_photo) REFERENCES photo (id_photo),
    FOREIGN KEY (id_album) REFERENCES album (id_album)  
);
