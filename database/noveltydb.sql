-- Create a database if it doesn't exist.
CREATE database IF NOT EXISTS noveltydb;
-- Use the database we created.
USE noveltydb;
-- If there's a table that has a foriegn key, 
-- assign to 0. So it can drop parent tables.
SET FOREIGN_KEY_CHECKS=0; 
-- Drop tables if they exist.
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Business_Idea;
DROP TABLE IF EXISTS Documents;
DROP TABLE IF EXISTS Answers;
DROP TABLE IF EXISTS Questions;
DROP TABLE IF EXISTS Question_Catergory;
-- Enable the foriegn keys on the parent tables.
SET FOREIGN_KEY_CHECKS=1;
-- Create Users table.
CREATE TABLE IF NOT EXISTS Users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) DEFAULT NULL,
    last_name VARCHAR(20) DEFAULT NULL,
    email VARCHAR(64) DEFAULT NULL,
    user_password VARCHAR(20) DEFAULT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Documents table.
CREATE TABLE IF NOT EXISTS Documents (
    id INT(11) NOT NULL AUTO_INCREMENT,
    doc_name VARCHAR(64) DEFAULT NULL,
    descript VARCHAR(64) DEFAULT NULL,
    path_loc VARCHAR(64) DEFAULT NULL,

    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Question Catergory table.
CREATE TABLE IF NOT EXISTS Question_Catergory (
    id INT NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;
-- Create Business Ideas table.
CREATE TABLE IF NOT EXISTS Business_Idea (
    id INT NOT NULL AUTO_INCREMENT,
    busin_name VARCHAR(64) DEFAULT NULL,
    status_flag VARCHAR(5) DEFAULT TRUE,
    id_user INT,

    PRIMARY KEY (id),
    INDEX (id_user),

    FOREIGN KEY (id_user) REFERENCES Users(id)
) ENGINE=INNODB;
-- Create Questions table.
CREATE TABLE IF NOT EXISTS Questions (
    id INT NOT NULL AUTO_INCREMENT,
    q_name VARCHAR(64) DEFAULT NULL,
    id_cat INT NOT NULL,
    
    PRIMARY KEY (id),

    INDEX (id_cat),

    FOREIGN KEY (id_cat) REFERENCES Question_Catergory(id)
) ENGINE=INNODB;
-- Create Answers table.
CREATE TABLE IF NOT EXISTS Answers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user_answer VARCHAR(225),
    id_bus INT NOT NULL,
    id_que INT NOT NULL,

    PRIMARY KEY (id),

    INDEX (id_que),
    INDEX (id_bus),

    FOREIGN KEY (id_que) REFERENCES Questions(id),
    FOREIGN KEY (id_bus) REFERENCES Business_Idea(id)
) ENGINE=INNODB;
-- Inserting the default category questions for questions.
INSERT INTO Question_Catergory (cat_name) VALUES ('STEP1');
INSERT INTO Question_Catergory (cat_name) VALUES ('STEP2');
INSERT INTO Question_Catergory (cat_name) VALUES ('STEP3');
INSERT INTO Question_Catergory (cat_name) VALUES ('STEP4');
INSERT INTO Question_Catergory (cat_name) VALUES ('STEP5');
-- Inserting the default questions for the Users.
INSERT INTO Questions (q_name, id_cat) VALUES ('What problem is your idea solving?', 1);
INSERT INTO Questions (q_name, id_cat) VALUES ('What value does your product or service add to someone’s life?', 1);
INSERT INTO Questions (q_name, id_cat) VALUES ('Who else is doing this?', 1);
INSERT INTO Questions (q_name, id_cat) VALUES ('How is your product or service different?', 1);
INSERT INTO Questions (q_name, id_cat) VALUES ('Is this a long or short term goal?', 1);