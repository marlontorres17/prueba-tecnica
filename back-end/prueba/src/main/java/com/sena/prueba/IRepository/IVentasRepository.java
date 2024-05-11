package com.sena.prueba.IRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.prueba.Entity.Ventas;

@Repository
public interface IVentasRepository extends IBaseRepository <Ventas, Long> {
    @Query(value = "SELECT COUNT(*) AS ventas_realizadas FROM ventas", nativeQuery = true)
    Integer getTotalVentas();

    
}