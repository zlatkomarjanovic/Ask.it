CREATE DATABASE askit; 

--download extension
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    ime VARCHAR(255) NOT NULL, 
    prezime VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
);

--generating some users
INSERT INTO users (ime, prezime, email, password) VALUES('zlatko', 'marjanovic', 'business@zlatkomarjanovic.com', 'macaksenad123');