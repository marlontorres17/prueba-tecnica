package com.sena.prueba.IRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.prueba.Entity.Clientes;

@Repository
public interface IClientesRepository extends IBaseRepository <Clientes, Long> {

    @Query(value = "SELECT COUNT(*) AS clientes_registrados FROM clientes", nativeQuery = true)
    Integer getTotalClientes();

}