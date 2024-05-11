package com.sena.prueba.Entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Productos extends ABaseEntity {
    @Column(name = "nombre_producto", length = 45, nullable = false)
    private String nombreProducto;

    @Column(name = "descripcion", length = 45, nullable = false)
    private String descripcion;

    @Column(name = "cantidad", length = 45, nullable = false)
    private Integer cantidad;

    @Column(name = "precio", precision = 9, scale = 2, nullable = false)
    private BigDecimal precio;

    @Column(name = "porcentaje_iva", nullable = false)
    private Integer porcentajeIva;

    @Column(name = "porcentaje_descuento", nullable = false)
    private Integer porcentajeDescuento;

    public Integer getPorcentajeIva() {
        return porcentajeIva;
    }

    public void setPorcentajeIva(Integer porcentajeIva) {
        this.porcentajeIva = porcentajeIva;
    }

    public Integer getPorcentajeDescuento() {
        return porcentajeDescuento;
    }

    public void setPorcentajeDescuento(Integer porcentajeDescuento) {
        this.porcentajeDescuento = porcentajeDescuento;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

   







    
}