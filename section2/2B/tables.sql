/* create schema */
CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(20) NULL,
    last_name VARCHAR(30) NULL
);

CREATE TABLE IF NOT EXISTS phones (
    id INT NOT NULL Auto_increment PRIMARY KEY,
    user_id INT NOT NULL,
    number VARCHAR(20) DEFAULT 'N/A',
  FOREIGN KEY(user_id) REFERENCES people(id)
);
insert into people (first_name, last_name) VALUES ('John', 'Smith'),('Mary', 'Jones'), ('Gerhard', 'Feuerhaufen'),('Rami', 'Pitkäniemi'),('Anna', 'Kråkström');

insert into phones (user_id, number) VALUES (2,'+1 213 621 0002'),(2, '+1 800 444 4444'),(1,'+1 604 444 4444'), (1, '+44 20 8759 9036'),(4, '+358 50 333 3333'),(5,'+46 771 793 336');

/* Query */
SELECT * FROM (<nested query>) ORDER BY last_name;

SELECT CONCAT(first_name, " ", last_name) AS name, phones.number AS numbers
FROM people ORDER BY last_name
JOIN phones
ON people.id = phones.user_id;

SELECT people.first_name, phones.number, CASE
WHEN phones.number = NULL THEN 'N/A'
END
FROM people
LEFT JOIN phones
ON people.id = phones.user_id;

