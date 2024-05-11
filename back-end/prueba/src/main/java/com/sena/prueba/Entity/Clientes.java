package com.sena.prueba.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "clientes")
public class Clientes extends ABaseEntity {
    @Column(name = "tipo_identificacion", length = 30, nullable = false)
    private String tipoIdentificacion;

    @Column(name = "identificacion", length = 10, nullable = false)
    private String identificacion;

    @Column(name = "nombre_cliente", length = 45, nullable = false)
    private String nombreCliente;

    @Column(name = "apellido_cliente", length = 45, nullable = false)
    private String apellidoCliente;

    @Column(name = "telefono", length = 13, nullable = false)
    private String telefono;

    @Column(name = "direccion", length = 45, nullable = false)
    private String direccion;

    @Column(name = "ciudad", length = 45, nullable = false)
    private String ciudad;

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getApellidoCliente() {
        return apellidoCliente;
    }

    public void setApellidoCliente(String apellidoCliente) {
        this.apellidoCliente = apellidoCliente;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

     
}