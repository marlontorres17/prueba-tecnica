package com.sena.prueba.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.prueba.Entity.DescripcionVentas;
import com.sena.prueba.IService.IDescripcionVentasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/descripcionVentas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas,IDescripcionVentasService>{
	public DescripcionVentasController(IDescripcionVentasService service) {
        super(service, "DescripcionVentas");
        
    }
}