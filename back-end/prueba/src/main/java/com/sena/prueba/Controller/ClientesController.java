package com.sena.prueba.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.prueba.Entity.Clientes;
import com.sena.prueba.IService.IClientesService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/clientes")
public class ClientesController extends ABaseController<Clientes,IClientesService>{
	public ClientesController(IClientesService service) {
        super(service, "clientes");
        
    }

    @GetMapping("/totales")
		 public Integer totales() {
			 return service.TotalDeClientes();
		 }

}