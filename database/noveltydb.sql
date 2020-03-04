-- Create a database if it doesn't exist.
CREATE database IF NOT EXISTS noveltydb;
-- Use the database we created.
USE noveltydb;
-- If there's a table that has a foriegn key, 
-- assign to 0. So it can drop parent tables.
SET FOREIGN_KEY_CHECKS=0; 
-- Drop tables if they exist.
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS business_idea;
DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS question_catergory;
-- Enable the foriegn keys on the parent tables.
SET FOREIGN_KEY_CHECKS=1;
-- Create Users table.
CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) DEFAULT NULL,
    last_name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL UNIQUE,
    user_password VARCHAR(255) DEFAULT NULL,
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Documents table.
CREATE TABLE IF NOT EXISTS documents (
    id INT(11) NOT NULL AUTO_INCREMENT,
    doc_name VARCHAR(64) DEFAULT NULL,
    descript VARCHAR(64) DEFAULT NULL,
    path_loc VARCHAR(64) DEFAULT NULL,
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Question Catergory table.
CREATE TABLE IF NOT EXISTS question_catergory (
    id INT NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR(64) NOT NULL,
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Business Ideas table.
CREATE TABLE IF NOT EXISTS business_idea (
    id INT NOT NULL AUTO_INCREMENT,
    busin_idea VARCHAR(64) DEFAULT NULL,
    status_flag VARCHAR(5) DEFAULT TRUE,
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    id_user INT,

    PRIMARY KEY (id),
    INDEX (id_user),

    FOREIGN KEY (id_user) REFERENCES users(id)
) ENGINE=INNODB;
-- Create Questions table.
CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL AUTO_INCREMENT,
    q_name VARCHAR(64) DEFAULT NULL,
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    id_cat INT NOT NULL,
    
    PRIMARY KEY (id),

    INDEX (id_cat),

    FOREIGN KEY (id_cat) REFERENCES question_catergory(id)
) ENGINE=INNODB;
-- Create Answers table.
CREATE TABLE IF NOT EXISTS answers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user_answer VARCHAR(225),
    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    id_bus INT NOT NULL,
    id_que INT NOT NULL,

    PRIMARY KEY (id),

    INDEX (id_que),
    INDEX (id_bus),

    FOREIGN KEY (id_que) REFERENCES questions(id),
    FOREIGN KEY (id_bus) REFERENCES business_idea(id)
) ENGINE=INNODB;
-- Inserting the default category questions for questions.
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP1', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP2', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP3', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP4', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP5', 'System', now(), 'System', now());
-- Inserting the default questions for the Users.
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('What problem is your idea solving?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('What value does your product or service add to someone’s life?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Who else is doing this?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('How is your product or service different?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Is this a long or short term goal?', 'System', now(), 'System', now(), 1);
-- Creating stored procedure.
DELIMITER $$

DROP PROCEDURE IF EXISTS registerUser $$
DROP PROCEDURE IF EXISTS loginUser $$
DROP PROCEDURE IF EXISTS forgotPassword $$
DROP PROCEDURE IF EXISTS resetPassword $$
DROP PROCEDURE IF EXISTS businessIdea $$
DROP PROCEDURE IF EXISTS getQuestions $$

CREATE PROCEDURE registerUser(IN f_name VARCHAR(50), IN l_name VARCHAR(50), IN u_email VARCHAR(255), IN u_password VARCHAR(255))
BEGIN
    INSERT INTO users (first_name, last_name, email, user_password, createdby, createdat, modifiedby, modifiedat) 
    VALUES (f_name, l_name, u_email, u_password, 'System', now(), CONCAT(first_name, ' ', last_name), now());
END $$

CREATE PROCEDURE loginUser(IN u_email VARCHAR(255))
BEGIN
    SELECT * FROM users 
    WHERE email = u_email;
END $$

CREATE PROCEDURE forgotPassword(IN u_email VARCHAR(255))
BEGIN
    SELECT first_name, email FROM users 
    WHERE email = u_email;
END $$

CREATE PROCEDURE resetPassword(IN u_email VARCHAR(255), IN u_password VARCHAR(255))
BEGIN
    UPDATE users 
    SET user_password = u_password, modifiedby = CONCAT(first_name, ' ', last_name), modifiedat = now()
    WHERE email = u_email;
END $$

CREATE PROCEDURE businessIdea(IN biz_idea VARCHAR(255), IN iduser INT(11) )
BEGIN 
     INSERT INTO business_idea(busin_idea, id_user, createdby, createdat, modifiedby, modifiedat)
     VALUES(biz_idea, iduser, 'System', now(), iduser, now());
END $$

CREATE PROCEDURE getQuestions()
BEGIN
    SELECT id, q_name FROM questions;
END $$


DELIMITER ;