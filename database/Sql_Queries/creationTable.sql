use Crypto

--drop table users

-- création de la table des utilisateurs 
create table users (
id int PRIMARY Key Identity(1,1) not null,
username varchar(50) not null, 
firstName varchar (100) not null, 
lastName varchar(100) not null,
email varchar(100) not null, 
password varchar (100) not null, 
number varchar (14) not null
)


-- creation de la table des items
create table items(itemId int PRIMARY Key Identity(1,1) not null,
itemImage text not null,
itemMark varchar(50) not null,  --marque de l'item
itemPrice int not null, 
itemColor varchar(50) not null, 
itemDetails text, 
itemMaterial varchar(50),
itemCareInstruction text, 
itemCategory text not null) 
 

--création de la table size_quantity
create table sizeAndQuantity (ItemId int not null FOREIGN KEY (itemId) REFERENCES items(itemId), 
itemSize varchar(50) not null,
itemQuantity int not null)



--Insert 

-- User test insert 
insert into users values('test','testNAme', 'testLastName', 'test@email.com', 'bonjour', '345-484-9484')


--test insert into items
USE [Crypto]
GO

INSERT INTO [dbo].[items]
           ([itemImage]
           ,[itemMark]
           ,[itemPrice]
           ,[itemColor]
           ,[itemDetails]
           ,[itemMaterial]
           ,[itemCareInstruction]
           ,[itemCategory])
     VALUES
           ('http://www.tennisnuts.com/images/product/full/729264-010-PHSFH001-2000.jpg'
           ,'Nike'
           ,65
           ,'black'
           ,'nike flexible short'
           ,'polysterene'
           ,'washing machine'
           ,'pants')
GO

insert into items values            
('https://preview.redd.it/yb1cqvm560w21.jpg?auto=webp&s=680e2b72865a533cc0bafc39656753714a7fc37d'
           ,'Air Jordan 1'
           ,350
           ,'white and pink'
           ,'jordan 1 high white and pink'
           ,'NA'
           ,'NA'
           ,'shoes')
insert into items values            
('http://www.yupoosneakers.com/images/Air-Jordan-1-Basketball-Shoes-White-Red-TO1467_03.jpg'
           ,'Air Jordan 1'
           ,250
           ,'white red'
           ,'jordan 1 low'
           ,'NA'
           ,'NA'
           ,'shoes')
insert into items values            
('https://sneakersgood.com/wp-content/uploads/2021/01/university-blue-jordan-1-555088-134-release-date-5.jpg'
           ,'Air Jordan 1 Retro High'
           ,500
           ,' OG “University Blue”'
           ,'jordan 1 Retro high Og "University Blue"'
           ,'NA'
           ,'NA'
           ,'shoes')
insert into items values            
('https://www.modern-notoriety.com/wp-content/uploads/2018/05/nike-air-force-1-100-aq3621-111-2.jpg'
           ,' Nike Air Force One'
           ,170
           ,'white and beige'
           ,' Nike Air Force One Swoosh Pack'
           ,'NA'
           ,'NA'
           ,'shoes')

--test insert into sizeAndQuantity
INSERT INTO [dbo].[sizeAndQuantity]
           ([itemId]
           ,[itemSize]
           ,[itemQuantity])
     VALUES
           (1
           ,'small'
           ,24
		   )
GO
