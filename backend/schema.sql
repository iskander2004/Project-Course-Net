create database skon;

use skon;
create table user(
	id int auto_increment primary key, 
	nom_et_prenom varchar(50) not null,
    age int not null,
	numéro_de_téléphone bigint not null,
	email varchar(100) not null,
    password varchar(255) not null,
    confirm_password varchar(255) not null
);

INSERT INTO user (nom_et_prenom, age, numéro_de_téléphone, email, password, confirm_password) VALUES
('Ahmed Ben Salah', 25, 21612345678, 'ahmed.bensalah@example.com', 'motdepasse123', 'motdepasse123'),
('Yasmine Trabelsi', 30, 21698765432, 'yasmine.trabelsi@example.com', 'mdp456Yas', 'mdp456Yas'),
('Omar Chatti', 22, 21654321987, 'omar.chatti@example.com', 'omarPass321', 'omarPass321'),
('Salma Mahfoudh', 28, 21678945612, 'salma.mahfoudh@example.com', 'salmaPwd789', 'salmaPwd789'),
('Hichem Dali', 35, 21632165498, 'hichem.dali@example.com', 'hichemDali88', 'hichemDali88'),
('Mariem Gharbi', 21, 21674185296, 'mariem.gharbi@example.com', 'Mariem1234', 'Mariem1234'),
('Khalil Jaziri', 27, 21696385274, 'khalil.jaziri@example.com', 'kjPass!23', 'kjPass!23'),
('Nour Ben Romdhane', 26, 21615975348, 'nour.benromdhane@example.com', 'nourSecure@1', 'nourSecure@1'),
('Rania Saidi', 24, 21675395146, 'rania.saidi@example.com', 'RaniaPwd246', 'RaniaPwd246'),
('Mohamed Yacine', 29, 21685274196, 'mohamed.yacine@example.com', 'yacinePass99', 'yacinePass99');


INSERT INTO user (nom_et_prenom, age, numéro_de_téléphone, email, password, confirm_password) VALUES
('Sana Messaoudi', 23, 21611223344, 'sana.messaoudi@example.com', 'sanaMdp2024', 'sanaMdp2024'),
('Walid Gharbi', 31, 21644332211, 'walid.gharbi@example.com', 'walid123', 'walid123'),
('Henda Kacem', 27, 21655667788, 'henda.kacem@example.com', 'hendaPass', 'hendaPass'),
('Firas Chaabane', 33, 21666778899, 'firas.chaabane@example.com', 'firasSecure1', 'firasSecure1'),
('Imen Ben Amor', 26, 21699887766, 'imen.benamor@example.com', 'imenLove22', 'imenLove22'),
('Nader Zouari', 28, 21633445566, 'nader.zouari@example.com', 'naderZ2024', 'naderZ2024'),
('Rahma Mejri', 24, 21677889900, 'rahma.mejri@example.com', 'rahmaSecure', 'rahmaSecure'),
('Yassine Kharrat', 29, 21644556677, 'yassine.kharrat@example.com', 'yassinePwd', 'yassinePwd'),
('Asma Jelassi', 22, 21622334455, 'asma.jelassi@example.com', 'asmaPass', 'asmaPass'),
('Anis Triki', 30, 21655664488, 'anis.triki@example.com', 'anis1234', 'anis1234');

