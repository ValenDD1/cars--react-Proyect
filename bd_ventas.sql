create database bd_ventas_ds;

use bd_ventas_ds;

create table tb_marca (
	codigo_marca char(5) not null primary key,
    marca varchar(30) not null
);

create table tb_categoria (
	codigo_categoria char(5) not null primary key,
    categoria varchar(20) not null
);

create table tb_producto (
	codigo_producto char(5) not null primary key,
    producto varchar(40) not null,
    stock_disponible int,
    costo float,
    ganancia float,
    producto_codigo_marca char(5) not null,
    producto_codigo_presentacion char(5) not null,
    foreign key (producto_codigo_marca) references tb_marca (codigo_marca),
    foreign key (producto_codigo_presentacion) references tb_presentacion (codigo_presentacion)
);

insert into tb_marca values
("M0001", "Costeño"),
("M0002", "Gloria"),
("M0003", "Del Valle");

select * from tb_marca;

insert into tb_categoria values
("C0001", "Abarrotes"),
("C0002", "Electrodomésticos"),
("C0003", "Cómputo");

select * from tb_presentacion;

insert into tb_producto values
("P0001", "Arroz", 3000, 4.3, 0.2154, "M0001", "C0001"),
("P0002", "Azúcar", 4200, 3.7, 0.3214, "M0003", "C0001"),
("P0003", "Televisor LED", 500, 1952.85, 0.1856, "M0002", "C0002");

select * from tb_producto;

delimiter $$
create procedure sp_listar_marca()
begin
	select * from tb_marca order by marca desc;
end; $$

call sp_listar_marca();

delimiter $$
create procedure sp_listar_producto()
begin
	select * from tb_producto order by costo desc;
end; $$

call sp_listar_producto();

-- drop procedure sp_listar_producto;

delimiter $$
create procedure sp_listar_producto_completo()
begin
	select tb1.codigo_producto, tb1.producto, tb1.medida, tb1.stock_disponible,
           tb1.perecible, tb1.costo, tb2.marca, tb3.presentacion
    from tb_producto tb1 inner join tb_marca tb2
    on (tb1.producto_codigo_marca = codigo_marca) inner join tb_presentacion tb3
    on (tb1.producto_codigo_presentacion = codigo_presentacion)
    order by tb1.costo desc;
end; $$

call sp_listar_producto_completo();

drop procedure sp_listar_producto_completo;








 


