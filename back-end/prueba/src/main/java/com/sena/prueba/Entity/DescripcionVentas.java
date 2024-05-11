package com.sena.prueba.Entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "descripcion_ventas")
public class DescripcionVentas extends ABaseEntity{
    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;

    @Column(name = "precio", precision = 9, scale = 2, nullable = false)
    private BigDecimal precio;

    @Column(name = "descuento", precision = 9, scale = 2, nullable = false)
    private BigDecimal descuento;

    @Column(name = "subtotal", precision = 9, scale = 2, nullable = false)
    private BigDecimal subtotal;

    @ManyToOne(fetch = FetchType.EAGER)
   	@JoinColumn(name = "ventas_id", nullable = false)
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.EAGER)
   	@JoinColumn(name = "productos_id", nullable = false)
    private Productos productos;

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

    public BigDecimal getDescuento() {
        return descuento;
    }

    public void setDescuento(BigDecimal descuento) {
        this.descuento = descuento;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }

    public Ventas getVentas() {
        return ventas;
    }

    public void setVentas(Ventas ventas) {
        this.ventas = ventas;
    }

    public Productos getProductos() {
        return productos;
    }

    public void setProductos(Productos productos) {
        this.productos = productos;
    }



    
}