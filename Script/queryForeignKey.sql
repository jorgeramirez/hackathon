----- Compras ----------------
ALTER TABLE compras
ADD FOREIGN KEY (proveedor_id)
REFERENCES proveedores(id);

ALTER TABLE compras
ADD FOREIGN KEY (tipo_credito_id)
REFERENCES tipo_creditos(id);

ALTER TABLE compras
ADD FOREIGN KEY (deposito_id)
REFERENCES depositos(id);

----- Compra detalles -------
ALTER TABLE compra_detalles
ADD FOREIGN KEY (producto_id)
REFERENCES Productos(id);

ALTER TABLE compra_detalles
ADD FOREIGN KEY (compra_id)
REFERENCES compras(id);

----- Ventas ----------------
ALTER TABLE ventas
ADD FOREIGN KEY (cliente_id)
REFERENCES clientes(id);

----- Venta detalles --------
ALTER TABLE venta_detalles
ADD FOREIGN KEY (producto_id)
REFERENCES Productos(id);

ALTER TABLE venta_detalles
ADD FOREIGN KEY (venta_id)
REFERENCES ventas(id);

ALTER TABLE venta_detalles
ADD FOREIGN KEY (promocion_id)
REFERENCES promociones(id);

----- Transferencias deposito -------
ALTER TABLE transferencias_deposito
ADD FOREIGN KEY (origen_id)
REFERENCES depositos(id);

ALTER TABLE transferencias_deposito
ADD FOREIGN KEY (destino_id)
REFERENCES depositos(id);

----- Productos deposito -------
ALTER TABLE producto_depositos
ADD FOREIGN KEY (deposito_id)
REFERENCES depositos(id);

ALTER TABLE producto_depositos
ADD FOREIGN KEY (producto_id)
REFERENCES productos(id);

----- Clientes -------------------
ALTER TABLE clientes
ADD FOREIGN KEY (categoria_cliente_id)
REFERENCES categoria_clientes(id);

----- Registros de produccion -------
ALTER TABLE registros_produccion
 ADD FOREIGN KEY (proceso_id)
     REFERENCES procesos (id);



------ secuencias para surucusales --------
CREATE SEQUENCE sucursal_734989392_nro_factura_seq
                                            INCREMENT 1
                                            MINVALUE 1
                                            MAXVALUE 9223372036854775807
                                            START 1
                                            CACHE 1;

CREATE SEQUENCE sucursal_851860984_nro_factura_seq
                                            INCREMENT 1
                                            MINVALUE 1
                                            MAXVALUE 9223372036854775807
                                            START 1
                                            CACHE 1;
