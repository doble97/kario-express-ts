-- Active: 1727487294805@@127.0.0.1@3306
drop DATABASE kario_db;
create database kario_db;
use kario_db;
drop table if EXISTS users;
create table users(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    created_at DATE DEFAULT NOW()
);

drop table if EXISTS languages;
create table languages(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    initials CHAR(2) NOT NULL
);
INSERT INTO languages(name, initials) values('Spanish', 'sp'),('English', 'en');

drop table if EXISTS themes;
create table themes(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    fk_user_id int not null,
    fk_language_id int not null,
    FOREIGN KEY (fk_user_id) REFERENCES users(id),
    FOREIGN KEY (fk_language_id) REFERENCES languages(id)
);

drop table if exists words;
create table words(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE
);

drop table if EXISTS word_theme;
create table word_theme(
    fk_theme_id int UNSIGNED,
    fk_word_one_id int UNSIGNED,
    fk_word_two_id int UNSIGNED,
    Foreign Key (fk_theme_id) REFERENCES themes(id),
    Foreign Key (fk_word_one_id) REFERENCES words(id),
    Foreign Key (fk_word_two_id) REFERENCES words(id),
    CONSTRAINT pk_translation PRIMARY KEY(fk_theme_id, fk_word_one_id, fk_word_two_id)
);
