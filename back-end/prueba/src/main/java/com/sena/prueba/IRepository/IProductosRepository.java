package com.sena.prueba.IRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sena.prueba.Entity.Productos;

@Repository
public interface IProductosRepository extends IBaseRepository <Productos, Long> {
     @Query(value = "SELECT COUNT(*) AS registro_productos FROM productos", nativeQuery = true)
        Integer getTotalProductos();
    
}