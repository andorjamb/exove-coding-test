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


SELECT CONCAT(first_name, " ", last_name) AS name, DT.numbers AS numbers
FROM people
LEFT JOIN (SELECT GROUP_CONCAT(COALESCE(number, 'N/A')) AS numbers, user_id 
FROM phones 
GROUP BY user_id) AS DT
ON people.id = DT.user_id
ORDER BY last_name;

/* WORKS */


