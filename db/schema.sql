DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE userName (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE post (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userName_id INTEGER NOT NULL REFERENCES userName(id),
    title VARCHAR(300) NOT NULL,
    dateCreated DATE NOT NULL,
    dateUpdated DATE NOT NULL,
    bodyText TEXT NOT NULL
);

CREATE TABLE comment (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userName_id INTEGER NOT NULL REFERENCES userName(id),
    bodyText TEXT NOT NULL,
    post_id INTEGER NOT NULL REFERENCES post(id),
    dateCreated DATE NOT NULL,
    dateUpdated DATE NOT NULL
)

