function save(){
  var data = {
      
      'total' : $('#total').val(),
      'fechaVenta' : $('#fechaVenta').val(),
      'clientes' : { 'id' : $('#clientes_id').val()},
      'state' : $('#state').val() == 1 ? true : false 
  };

  

  var jsonData = JSON.stringify(data);

  $.ajax({
      url : 'http://localhost:9000/prueba/v1/api/ventas',
      method : 'POST',
      dataType : 'json',
      contentType : 'application/json',
      data : jsonData,
      success : function(data){
        Swal.fire('¡Registro exitoso!', '', 'success').then(function() {
            loadData();
            clearData();
        });
    },
      error : function(error){
          console.error('Error al guardar: ',error);
      }
  });
}



function update(){
  var data = {
      'total' : $('#total').val(),
      'fechaVenta' : $('#fechaVenta').val(),
      'clientes' : { 'id' : $('#clientes_id').val()},
      'state' :parseInt ($('#state').val())
  };

  var id = $('#id').val();
  var jsonData = JSON.stringify(data);

  $.ajax({
      url : 'http://localhost:9000/prueba/v1/api/ventas/' + id, 
      method: "PUT",
      dataType: 'json',
      contentType: 'application/json',
      data: jsonData,
      success : function(result){
        Swal.fire('¡Actualización exitosa!', '', 'success').then(function() {
            loadData();
            clearData();

            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text('Agregar');
            btnAgregar.attr('onclick', 'save()');
        });
    },
      error : function(error){
          console.error('Error al actualizar: ', error);
      }
  });
}

function loadData(){
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/ventas', 
      method : 'GET',
      dataType : 'json',
      success : function(response){
          var html = '';
          var data = response.data;

          if(Array.isArray(data)){
              data.forEach(function(item){
                  html += `<tr>
                  <td>${item.total}</td>
                  <td>${item.fechaVenta}</td>
                  <td>${item.clientes.nombreCliente}</td>
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

function loadClientes(){
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/clientes',
      method: "GET",
      dataType: 'json',
      success: function(response) {
          if (response.status && Array.isArray(response.data)) {
              var clientess = response.data.map(function(clientes) {
                  return {
                      label: clientes.nombreCliente, 
                      value: clientes.id 
                  };
              });
              
              $('#clientes').autocomplete({
                  source : function(request, response){
                      var results = $.ui.autocomplete.filter(clientess, request.term);
                      if (!results.length){
                          results = [{label : 'No se encontraron resultados', value: null}];
                      }
                      response(results);
                  },
                  select: function(event, ui){
                      $("#clientes_id").val(ui.item.value);
                      $("#clientes").val(ui.item.label);
                      console.log("ID de clientes: " + ui.item.value);
                      return false;
                  }
  });
} else {
  console.error("No se obtuvo la lista de clientess.");
}
      },
      error : function(error){
          console.error("Error de la solicitur: ",error);
      }
  });
}








function findById(id){
  
  $.ajax({
      url: 'http://localhost:9000/prueba/v1/api/ventas/' + id,
      method : 'GET',
      dataType : 'json',
      success : function(data){
          $('#id').val(data.data.id);
          $('#total').val(data.data.total);
          $('#fechaVenta').val(data.data.fechaVenta);
          $('#clientes').val(data.data.clientes.id);
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
    Swal.fire('¡Registro eliminado!', '', 'success').then(function() {
        loadData();
        clearData();
    });
  }).fail(function(xhr, status, error) {
      console.error("Error al eliminar el registro:", error);
  });
}


function clearData(){
  $('#total').val('');
  $('#fechaVenta').val('');
  $('#clientes').val('');
  $('#state').val('');
}