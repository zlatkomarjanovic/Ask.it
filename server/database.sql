-- When installed pgAdmin, these are the commands you want to enter
-- In order to create tables properly
-- Then the backend will connect to the database through index.js and routes files

CREATE DATABASE askit; 

--download extension uuid
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    ime VARCHAR(255) NOT NULL, 
    prezime VARCHAR(255) NOT NULL, 
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL
    
);

CREATE TABLE questions(
	question_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	postedBy uuid NOT NULL, 
    postedbyusr VARCHAR(255) NOT NULL,
    postedbyemail VARCHAR(255) NOT NULL,
	title TEXT NOT NULL, 
    upvotes INT,
    downvotes INT, 
    comments JSONB[],
	FOREIGN KEY (postedBy)
		REFERENCES users (user_id),
	FOREIGN KEY (postedbyusr)
		REFERENCES users (username),
	FOREIGN KEY (postedbyemail)
		REFERENCES users (email)
);

--generating some users
INSERT INTO users (ime, prezime, email, password) VALUES('zlatko', 'marjanovic', 'business@zlatkomarjanovic.com', 'macaksenad123');

--generating some questions
INSERT INTO questions (postedBy, title, upvotes, downvotes, comments) VALUES(user.user_id[0], 'Bank of America calls police on "Black Panther" director Ryan Coogler after attempting to withdraw 12.000$ from his own bank account', 2, 2);