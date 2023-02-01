use users;
select* from users;
-------------------------------------------
create table users (
id int Primary key identity(1,1),
name varchar(255),
email varchar(255),
phone varchar (255),
topic varchar (255),
timePreference varchar (255),
subcription BIT 
);

-------------------------------------------------
CREATE PROCEDURE addUserRecord (
@name varchar(255),
@email varchar(255),
@phone  varchar(255),
@topic varchar(255),
@timePreference varchar(255),
@subcription varchar(255))
AS
BEGIN
	INSERT INTO dbo.users
		(
			name,
email,
phone,
topic,
timePreference,
subcription 
		)
    VALUES
		(
			@name ,
@email ,
@phone,
@topic,
@timePreference,
@subcription 
		)
END
GO

----------------------------
Exec addUserRecord @name="joy" ,
@email="j@gmail.com" ,
@phone="4654532596",
@topic="React",
@timePreference="evening",
@subcription="false";

----------------------------------------------------
-- #Get All users

create procedure getAllUsers
As 
begin 
select * from users;
end
go
---------------------------------
exec getAllUsers;

--------------------------------------------------------------
-- #update record
CREATE PROCEDURE updateUserRecord (
@id int,
@name varchar(255),
@email varchar(255),
@phone  varchar(255),
@topic varchar(255),
@timePreference varchar(255),
@subcription varchar(255))
AS
BEGIN
	update  dbo.users
	set 
name=@name,
email=@email,
phone=@phone,
topic=@topic,
timePreference=@timePreference,
subcription=@subcription
	where id = @id;
END
GO

-----------------------
EXEC updateUserRecord @id=1,@name="abhi",@email="ab@gmail.com",@phone="54544465445",@topic="Vue",@timePreference="morning", @subcription="true";

----------------------
-- #delete record 
create procedure deleteRecord 
@id int 
as
begin
delete from users where id = @id;
end 

----
exec deleteRecord @id=2;

------------------------------------------------------------
--#get user by id
create procedure getUserById 
@id int 
as
begin
select* from users where id = @id;
end 
----
exec getUserById @id=1;