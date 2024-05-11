function save(){
  var data = {
      
      'cantidad' : $('#cantidad').val(),
      'precio' : $('#precio').val(),
      'descuento' : $('#descuento').val(),
      'subtotal' : $('#subtotal').val(),

      'ventas' : { 'id' : $('#ventas_id').val()},
      'productos' : { 'id' : $('#productos_id').val()},

      'state' : $('#state').val() == 1 ? true : false 
  };

  

  var jsonData = JSON.stringify(data);

  $.ajax({
      url : 'http://localhost:9000/prueba/v1/api/descripcionVentas',
      method : 'POST',
      dataType : 'json',
      contentType : 'application/json',
      data : jsonData,
      success : function(data){
          alert("Registro guardado.");
          loadData();
          clearData();
      },
      error : function(error){
          console.error('Error al guardar: ',error);
      }
  });
}



function update(){
  var data = {
      'cantidad' : $('#cantidad').val(),
      'precio' : $('#precio').val(),
      'descuento' : $('#descuento').val(),
      'subtotal' : $('#subtotal').val(),

      'ventas' : { 'id' : $('#ventas_id').val()},
      'productos' : { 'id' : $('#productos_id').val()},

      'state' :parseInt ($('#state').val())
  };

  var id = $('#id').val();
  var jsonData = JSON.stringify(data);

  $.ajax({
      url : 'http://localhost:9000/prueba/v1/api/descripcionVentas/' + id, 
      method: "PUT",
      dataType: 'json',
      contentType: 'application/json',
      data: jsonData,
      success : function(result){
          alert("Actualizado.");
          loadData(); 
          clearData();

          var btnAgregar = $('button[name="btnAgregar"]');
          btnAgregar.text('Agregar');
          btnAgregar.attr('onclick', 'save()');
      },
      error : function(error){
          console.error('Error al actualizar: ', error);
      }
  });
}

function loadData(){
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/descripcionVentas', 
      method : 'GET',
      dataType : 'json',
      success : function(response){
          var html = '';
          var data = response.data;

          if(Array.isArray(data)){
              data.forEach(function(item){
                  html += `<tr>
                  <td>${item.cantidad}</td>
                  <td>${item.precio}</td>
                  <td>${item.descuento}</td>
                  <td>${item.subtotal}</td>


                  <td>${item.ventas.id}</td>
                  <td>${item.productos.nombreProducto}</td>

                  <td>${item.state === true ? 'Activo': 'Inactivo'}</td>
                  <td><button onclick="findById(${item.id})">Editar</button></td>
                  <td><button onclick="deleteById(${item.id})">Eliminar</button></td>
                  </tr>`;
              });
          } else {
              console.error('El atributo "data" no es un arreglo: ',data);
          }
          $('#resultData').html(html);
      },
      error : function(error){
          console.error('Error al cargar: ',error);
      }
  });
}

function loadVentas(){
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/ventas',
      method: "GET",
      dataType: 'json',
      success: function(response) {
          if (response.status && Array.isArray(response.data)) {
              var ventass = response.data.map(function(ventas) {
                  return {
                      label: ventas.id, 
                      value: ventas.id 
                  };
              });
              
              $('#ventas').autocomplete({
                  source : function(request, response){
                      var results = $.ui.autocomplete.filter(ventass, request.term);
                      if (!results.length){
                          results = [{label : 'No se encontraron resultados', value: null}];
                      }
                      response(results);
                  },
                  select: function(event, ui){
                      $("#ventas_id").val(ui.item.value);
                      $("#ventas").val(ui.item.label);
                      console.log("ID de ventas: " + ui.item.value);
                      return false;
                  }
  });
} else {
  console.error("No se obtuvo la lista de ventass.");
}
      },
      error : function(error){
          console.error("Error de la solicitur: ",error);
      }
  });
}

function loadProductos(){
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/productos',
      method: "GET",
      dataType: 'json',
      success: function(response) {
          if (response.status && Array.isArray(response.data)) {
              var productoss = response.data.map(function(productos) {
                  return {
                      label: productos.nombreProducto, 
                      value: productos.id 
                  };
              });
              
              $('#productos').autocomplete({
                  source : function(request, response){
                      var results = $.ui.autocomplete.filter(productoss, request.term);
                      if (!results.length){
                          results = [{label : 'No se encontraron resultados', value: null}];
                      }
                      response(results);
                  },
                  select: function(event, ui){
                      $("#productos_id").val(ui.item.value);
                      $("#productos").val(ui.item.label);
                      console.log("ID de productos: " + ui.item.value);
                      return false;
                  }
  });
} else {
  console.error("No se obtuvo la lista de productoss.");
}
      },
      error : function(error){
          console.error("Error de la solicitur: ",error);
      }
  });
}









function findById(id){
  
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/descripcionVentas/' + id,
      method : 'GET',
      dataType : 'json',
      success : function(data){
          $('#id').val(data.data.id);
          $('#cantidad').val(data.data.cantidad);
          $('#precio').val(data.data.precio);
          $('#descuento').val(data.data.descuento);
          $('#subtotal').val(data.data.subtotal);

          $('#ventas').val(data.data.ventas.id);
          $('#productos').val(data.data.productos.id);

          $('#state').val(data.data.state === true ? 1 : 0);

          
          
          
          var btnAgregar = $('button[name="btnAgregar"]');
          btnAgregar.text('Actualizar');
          btnAgregar.attr('onclick', 'update()');

      },
      error : function(error){
          console.error('Error al encontrar: ',error);
      }
  });
}


function deleteById(id) {
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/ventas/' + id,
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  }).done(function(result) {
      alert("Registro eliminado exitoso");
      loadData();
      clearData();
  }).fail(function(xhr, status, error) {
      console.error("Error al eliminar el registro:", error);
  });
}


function clearData(){
  $('#cantidad').val('');
  $('#precio').val('');
  $('#descuento').val('');
  $('#subtotal').val('');
  $('#ventas').val('');
  $('#productos').val('');

  $('#state').val('');
}