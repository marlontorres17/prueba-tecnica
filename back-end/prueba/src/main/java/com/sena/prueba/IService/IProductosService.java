package com.sena.prueba.IService;


import java.util.List;

import com.sena.prueba.Entity.Productos;

public interface IProductosService extends IBaseService <Productos>{

    public Integer TotalDeProductos();

    List<Productos> getTop();
    
}