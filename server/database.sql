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

CREATE TABLE comments(
	comment_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	commentedOnQuestion uuid NOT NULL, 
    comment TEXT NOT NULL,
    commentedBy uuid NOT NULL,
    commentedByUser VARCHAR(255) NOT NULL,
	commentedByEmail VARCHAR(255) NULL, 
    upvotes INT,
    downvotes INT, 
	FOREIGN KEY (commentedOnQuestion)
		REFERENCES questions (question_id),
    FOREIGN KEY (commentedBy)
		REFERENCES users (user_id),
    FOREIGN KEY (commentedByUser)
		REFERENCES users (username),
    FOREIGN KEY (commentedByEmail)
		REFERENCES users (email)
);

--generating some users
INSERT INTO users (ime, prezime, email, password, username) VALUES('zlatko', 'marjanovic', 'business@zlatkomarjanovic.com', 'macaksenad123', 'goldenko');

-- generating some comments
INSERT INTO comments (commentedonquestion, comment, commentedby, commentedbyuser, commentedbyemail) VALUES ('afc068e2-9ad1-45a0-b1a6-1edbfdf93896', 'Some random comment tied to this question', 'b794eda9-13a5-4d13-a630-cd243d042457', 'goldenko', 'zlajaa2000@gmail.com' );

--generating some questions
INSERT INTO questions (postedBy, title, upvotes, downvotes, comments) VALUES(user.user_id[0], 'Bank of America calls police on "Black Panther" director Ryan Coogler after attempting to withdraw 12.000$ from his own bank account', 2, 2);

--inner join for users and questions
SELECT * FROM users JOIN questions ON users.user_id = questions.postedby

--select all questions for a single user based on ID
SELECT * FROM questions WHERE postedby='ba2995f2-dfc1-436e-8f9b-c3db7b83aad7'