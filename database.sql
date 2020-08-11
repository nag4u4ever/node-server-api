CREATE DATABASE maternitycare;
--\c into HospitalManagement
CREATE TABLE hospitaldetails(
    id SERIAL PRIMARY KEY,
    Identifier VARCHAR(255),
    CompanyName VARCHAR(255),
    CompanyDetails VARCHAR(255)
);
\dt for different types of table

CREATE TABLE antental(
    id SERIAL PRIMARY KEY,
    MRNo VARCHAR(255),
    Name VARCHAR(255),
    Age INT,
    Contact VARCHAR(255)
);