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
    busin_idea VARCHAR(255) DEFAULT NULL,
    descript VARCHAR(255) DEFAULT NULL,
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
    q_name VARCHAR(300) DEFAULT NULL,
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

    id_user INT NOT NULL,
    id_bus INT NOT NULL,
    id_que INT NOT NULL,

    PRIMARY KEY (id),

    INDEX (id_user),
    INDEX (id_que),
    INDEX (id_bus),

    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_que) REFERENCES questions(id),
    FOREIGN KEY (id_bus) REFERENCES business_idea(id)
) ENGINE=INNODB;
-- Create Content table.
CREATE TABLE IF NOT EXISTS allContent (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(500),
    content VARCHAR(500),

    createdby VARCHAR(255) DEFAULT NULL,
    createdat DATETIME NOT NULL,
    modifiedby VARCHAR(255) DEFAULT NULL,
    modifiedat DATETIME NOT NULL,

    id_cat INT NOT NULL,

    PRIMARY KEY (id),

    INDEX (id_cat),

    FOREIGN KEY (id_cat) REFERENCES question_catergory(id)
) ENGINE=INNODB;

-- Inserting the default category questions for questions.
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP1', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP2', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP3', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP4', 'System', now(), 'System', now());
INSERT INTO question_catergory (cat_name, createdby, createdat, modifiedby, modifiedat) VALUES ('STEP5', 'System', now(), 'System', now());
-- Inserting the default questions for Users.
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('What problem is your idea solving?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('What value does your product or service add to someone’s life?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Who else is doing this?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('How is your product or service different?', 'System', now(), 'System', now(), 1);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Is this a long or short term goal?', 'System', now(), 'System', now(), 1);
-- Inserting default legal questions for Users.
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Do you have a business plan?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Have you registered your business/company with CIPC?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Have you registered with SARS to pay tax?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Have you registered with the Department Of Labour to abides to Compensation for Occupational Injuries and Diseases Act (COIDA)?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Do you have Unemployment Insurance Fund (UIF) registration?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('You have to register your company for Pay As You Earn (PAYE), have you?', 'System', now(), 'System', now(), 2);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('You need to register as a VAT (Value Added Tax) vendor if your projected sales per year will exceed R1 million, is your business/company registered as a VAT vendor?', 'System', now(), 'System', now(), 2);
-- Inserting default financial questions for Users.
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Do you have funds for your business?', 'System', now(), 'System', now(), 3);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Do you have a business account?', 'System', now(), 'System', now(), 3);
INSERT INTO questions (q_name, createdby, createdat, modifiedby, modifiedat, id_cat) VALUES ('Do you have financial management knowledge when it comes to business?', 'System', now(), 'System', now(), 3);
-- Inserting the default legal content
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Business Plan',
                    'A business plan is a document setting out a business`s future objectives and strategies for achieving them; It is formally written document and contains business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Register the business',
                    'The Companies and Intellectual Property Commission (CIPC) should be your first point of contact. This organisation has been established in order to administer the registration of companies, cooperatives and intellectual property rights such as trademarks, patents, designs and copyright. visit www.cipc.co.za for more information', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('SARS Registration',
                    'A legal obligation to pay tax regardless of the size of business being run. The law dictates that a business is registered with SARS within 60 days of starting operations. For those registered with CIPC the registration is automatic except sole proprietors or partners who need to register as provisional tax payers directly. visit www.sars.gov.za for more information.', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Department of Labour',
                    'This government department bears the responsibility of ensuring that businesses operate under conducive environment and abides by laid down legal provisions. Businesses with one or more full time employees are therefore required to register in accordance with the Compensation for Occupational Injuries and Diseases Act (COIDA).This Act has been put in place to safeguard the rights of employees who are injured, contract a disease or get killed as a result of their work. visit www.labour.gov.za for more information.', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Unemployment Insurance Fund',
                    'Unemployment Insurance Fund (UIF) benefits workers when they can’t work due to maternity, adoption leave or illness. UIF registration can be done on form UF8 at any SARS office or online. visit www.ufiling.co.za/uif for more information.', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Employee Tax',
                    'The law demands that if you employ one or more staff members who earn over R40,000 per year, you have to register your company for Pay As You Earn (PAYE). If your payroll is more than R500,000 a month, you must register for skills development levy (SDL). The funds are to be used to develop and improve skills of employees. visit www.sars.gov.za/TaxTypes/Paye for more information.', 
                    'System', now(), 'System', now(), 2);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('VAT Vendor',
                    'If your projected sales per year will exceed R1 million, then you need to register as a VAT (Value Added Tax) vendor. VAT vendor registration can be done by completing and submitting a VAT101 form, which is available at any SARS office. visit www.sars.gov.za/TaxTypes/VAT for more information.', 
                    'System', now(), 'System', now(), 2);
-- Inserting the default financial content
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Funds for my business.',
                    'Ideal to finance developmental projects, business expansion or business purchases. Loan repayment period up to 10 years. Flexi reserve facility to keep additional funds to be re-used in need. Inter-account transfers of available funds from flexi reserve facility. Auto-capitalisation to reduce outstanding capital to benefit from interest burden. Repayment frequencies: monthly, bi-monthly, quarterly, half-yearly and yearly', 
                    'System', now(), 'System', now(), 3);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Business Account',
                    'Opening a business account with the ABSA can be considered a bit challenging due to the necessary qualifications that are needed to meet approval requirements. Also, the demographical criteria is a big qualification requirement that rules a lot of business owners out of this equation. However, it is possible to open an ABSA business account without facing the stumbling blocks that cause most people to fail.', 
                    'System', now(), 'System', now(), 3);
INSERT INTO allContent (title, content, createdby, createdat, modifiedby, modifiedat, id_cat) 
            VALUES ('Financial Management',
                    'You’ll need to understand the underlying financial flows of your business. That’s key to your understanding of how to manage your business. So what we’re going to do in this session is give you the tools of startup finance to help you manage and build your business.', 
                    'System', now(), 'System', now(), 3);
-- Creating stored procedure.
DELIMITER $$

DROP PROCEDURE IF EXISTS registerUser $$
DROP PROCEDURE IF EXISTS loginUser $$
DROP PROCEDURE IF EXISTS forgotPassword $$
DROP PROCEDURE IF EXISTS resetPassword $$
DROP PROCEDURE IF EXISTS businessIdea $$
DROP PROCEDURE IF EXISTS getIdeas $$
DROP PROCEDURE IF EXISTS getQuestions $$
DROP PROCEDURE IF EXISTS postAnswers $$
DROP PROCEDURE IF EXISTS getContent $$

CREATE PROCEDURE getContent(IN cat_id INT)
BEGIN
    SELECT * FROM allContent
    WHERE allContent.id_cat = cat_id;
END $$

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

CREATE PROCEDURE businessIdea(IN biz_idea VARCHAR(255), IN biz_descrip VARCHAR(255), IN iduser INT(11))
BEGIN 
     INSERT INTO business_idea(busin_idea, descript, id_user, createdby, createdat, modifiedby, modifiedat)
     VALUES(biz_idea, biz_descrip, iduser, 'System', now(), iduser, now());
END $$

CREATE PROCEDURE getIdeas(IN u_id INT)
BEGIN
    SELECT id, busin_idea, descript
    FROM business_idea 
    WHERE status_flag = 1 AND business_idea.id_user = u_id;
END $$

CREATE PROCEDURE getQuestions(IN cat_id INT)
BEGIN
    SELECT id, q_name
    FROM questions
    WHERE questions.id_cat = cat_id;
END $$

CREATE PROCEDURE postAnswers(IN answer_user VARCHAR(255), IN u_id INT, IN q_id INT, IN b_id INT)
BEGIN
     INSERT INTO answers(user_answer, createdby, createdat, modifiedby, modifiedat, id_user, id_que, id_bus)
     VALUES(answer_user, u_id, now(), u_id, now(), u_id, q_id, b_id);
END $$

CREATE PROCEDURE deleteIdea(IN b_id INT, IN u_id INT)
BEGIN
    UPDATE business_idea
    SET status_flag = 0, modifiedby = u_id, modifiedat = now()
    WHERE business_idea.id_user = u_id;
END $$

CREATE PROCEDURE updateAnswer(IN answer_user VARCHAR(255), IN b_id INT, IN u_id INT)
BEGIN
    UPDATE answers
    SET user_answer = answer_user, modifiedby = u_id, modifiedat = now()
    WHERE answers.id = u_id;
END $$

DELIMITER ;