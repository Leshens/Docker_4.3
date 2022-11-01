CREATE TABLE hobbies(
   id INTEGER PRIMARY KEY,
   hobby VARCHAR (255) UNIQUE NOT NULL,
   numer integer (4)    NOT NULL
);

insert into hobbies(id,hobby,numer) values(1,'swimming',10);
insert into hobbies(id,hobby,numer) values(2,'diving',12);