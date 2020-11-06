
/****** Object:  Table Register  ******/   
CREATE TABLE Register(
	firstName varchar(20) NOT NULL,
	lastName varchar(20) NOT NULL,
	email varchar(50) NOT NULL,
	userName varchar(20) NOT NULL UNIQUE, 
	password varchar(10) NOT NULL,
	PRIMARY KEY(userName)
);

GO

/****** Object:  Table SignIn  ******/   
CREATE TABLE SignIn(
	userName varchar(20) NOT NULL,
	email varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
);
GO

/****** Object:  Table Education     ******/
CREATE TABLE Education(
	userName varchar(20) NOT NULL,
	schoolName varchar(255) NULL,
	degree varchar(50) NULL,
	major varchar(50) NULL,
	schoolCountry varchar(50) NULL,
	graduationYear varchar(5) NULL,
	gpa tinyint NULL,
	gpaScale tinyint NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table Qualifications    ******/
CREATE TABLE Qualifications(
	userName varchar(20) NOT NULL,
	qualification1 varchar(max) NULL,
	qualification2 varchar(max) NULL,
	qualification3 varchar(max) NULL,
	qualification4 varchar(max) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table Competencies    ******/
CREATE TABLE Competencies(
	userName varchar(20) NOT NULL,
	competency1 varchar(max) NULL,
	competency2 varchar(max) NULL,
	competency3 varchar(max) NULL,
	competency4 varchar(max) NULL,
	competency5 varchar(max) NULL,
	competency6 varchar(max) NULL,
	competency7 varchar(max) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table WorkExperience    ******/
CREATE TABLE WorkExperience(
	userName varchar(20) NOT NULL,
	responsibilites1 varchar(max) NULL,
	responsibilites2 varchar(max) NULL,
	responsibilites3 varchar(max) NULL,
	responsibilites4 varchar(max) NULL,
	responsibilites5 varchar(max) NULL,
	responsibilites6 varchar(max) NULL,
	responsibilites7 varchar(max) NULL,
	responsibilites8 varchar(max) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table Achievments    ******/
CREATE TABLE Achievments(
	userName varchar(20) NOT NULL,
	achievments1 varchar(max) NULL,
	achievments2 varchar(max) NULL,
	achievments3 varchar(max) NULL,
	achievments4 varchar(max) NULL,
	achievments5 varchar(max) NULL,
	achievments6 varchar(max) NULL,
	achievments7 varchar(max) NULL,
	achievments8 varchar(max) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table ContactInfo    ******/
CREATE TABLE ContactInfo(
	userName varchar(20) NOT NULL,
	app_name varchar(20) NULL,
	app_lastname varchar(20) NULL,
	app_email varchar(50) NULL,
	app_phone_num varchar(20) NULL,
	app_address varchar(50) NULL,
	app_country varchar(20) NULL,
	app_city varchar(20) NULL,
	app_state varchar(20) NULL,
	app_zip_code varchar(20) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table References    ******/
CREATE TABLE UserReferences(
	userName varchar(20) NOT NULL,
	contact_name varchar(20) NULL,
	contact_lastname varchar(20) NULL,
	contact_email varchar(50) NULL,
	contact_phone varchar(20) NULL,
	contact_position varchar(50) NULL,
	company_name varchar(50) NULL,
	contact_relationship varchar(50) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table ProfessionalDesignation    ******/
CREATE TABLE ProfDesignation(
	userName varchar(20) NOT NULL,
	designation varchar(20) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO

/****** Object:  Table AboutYou    ******/
CREATE TABLE AboutYou(
	userName varchar(20) NOT NULL,
	aboutYou varchar(max) NULL,
	FOREIGN KEY(userName) REFERENCES Register(userName)
)
GO
