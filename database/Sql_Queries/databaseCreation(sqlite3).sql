-- SQLite
/* 
create table IF NOT EXISTS Users (
userId INTEGER Primary key AUTOINCREMENT not null ,
firstName Varchar(50) not null, 
lastName varchar(50) not null, 
userame varchar(20) not null, --le username doit se situer entre 0 -20 caract�res 
email varchar(50) not null, 
password text not null
)



create table if not exists items(
itemId text not null Primary Key,
itemName varchar(50) not null, 
itemPrice FLOAT not null,
quantity int not null, 
itemDescription text, 
reviewCount float, 
reviewScore float,
Type varchar(50),
brand varchar(50) 
) 


create table if not exists itemsImage (
imgId INTEGER not null Primary Key AUTOINCREMENT, 
imgUrl text not null, 
itemId not null,
imagePosition int,
FOREIGN KEY(itemId) REFERENCES items(itemId)
)

create table if not exists favorites(
userId int not null, 
itemId int not null,
FOREIGN KEY(itemId) REFERENCES items(itemId),
FOREIGN KEY(userId) REFERENCES Users(userId)
)

create table if not exists Cart(
cartId INTEGER not null Primary Key AUTOINCREMENT,
userId int not null, 
itemId int not null, 
quantity int not null,
orderDate date, 
total float not null, 
FOREIGN KEY(itemId) REFERENCES items(itemId),
FOREIGN KEY(userId) REFERENCES Users(userId)
)


insert into Users values (
null,
'Stephane',
'Andre',
'trackaking',
'trackaking1@gmail.com',
'bonjour'
)
