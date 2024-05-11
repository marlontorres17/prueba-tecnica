package com.sena.prueba.Entity;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ventas")
public class Ventas extends ABaseEntity {
    @Column(name = "total", length = 45, nullable = false)
    private String total;

    @Column(name = "fecha_venta", nullable = false)
    private Date fechaVenta;

    @ManyToOne(fetch = FetchType.EAGER)
   	@JoinColumn(name = "cliente_id", nullable = false)
    private Clientes clientes;

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public Clientes getClientes() {
        return clientes;
    }

    public void setClientes(Clientes clientes) {
        this.clientes = clientes;
    }
}

   