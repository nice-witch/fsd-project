/* скрипты по созданию таблиц */

create table Container (
    id INT PRIMARY KEY,
    number INT,
    type VARCHAR(255),
    length INT,
    width INT,
    height INT,
    weight INT,
    empty bit,
    date_of_receipt DATETIME
)


create table Operations (
    id INT PRIMARY KEY,
    container_id INT,
    start_date DATETIME,
    finish_date DATETIME,
    type VARCHAR(255),
    FIO VARCHAR(255),
    inspection_place VARCHAR(255),
    FOREIGN KEY (container_id) REFERENCES Container (id),
)