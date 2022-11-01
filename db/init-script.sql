CREATE TABLE hobbies(
   id SERIAL PRIMARY KEY,
   hobby VARCHAR (255) UNIQUE NOT NULL,
   numer integer (4)    NOT NULL
);

insert into hobbies(hobby,numer) values('swimming',1);
insert into hobbies(hobby,numer) values('diving',2);
insert into hobbies(hobby,numer) values('jogging',3);
insert into hobbies(hobby,numer) values('dancing',4);
insert into hobbies(hobby,numer) values('cooking',5);