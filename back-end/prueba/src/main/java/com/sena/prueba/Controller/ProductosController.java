package com.sena.prueba.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.prueba.Entity.Productos;
import com.sena.prueba.IService.IProductosService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/productos")
public class ProductosController extends ABaseController<Productos,IProductosService>{
	public ProductosController(IProductosService service) {
        super(service, "Productos");
        
    }

    @GetMapping("/totales")
		 public Integer totales() {
			 return service.TotalDeProductos();
		 }

		 @GetMapping("/top")
         public List<Productos> getTop() {
        return service.getTop();
    }

}