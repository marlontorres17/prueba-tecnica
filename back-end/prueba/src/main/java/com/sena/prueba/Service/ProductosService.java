package com.sena.prueba.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.prueba.Entity.Productos;
import com.sena.prueba.IRepository.IBaseRepository;
import com.sena.prueba.IRepository.IProductosRepository;
import com.sena.prueba.IService.IProductosService;

@Service
public class ProductosService extends ABaseService <Productos> implements IProductosService {
    @Autowired
    private IProductosRepository repository;

    @Override
    protected IBaseRepository <Productos, Long> getRepository(){
        return repository;
    }

    @Override
	    public Integer TotalDeProductos() {
	        return repository.getTotalProductos();
	       
	    }

      ;

    @Override
    public List<Productos> getTop() {
        return repository.findTop();
    }
}
