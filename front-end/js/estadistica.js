function ClienteTotal(){
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/clientes/totales',
        method: 'GET',
        dataType: 'json',
        success : function(data){
             var cantidadClientes = data;
            $('#clientes').val(cantidadClientes);
            console.log("Cantidad de clientes:", cantidadClientes);
        },
        error: function (error){
            console.error('Error al obtener la cantidad de clientes:', error);
        }
    });
}

function ProductoTotal(){
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos/totales',
        method: 'GET',
        dataType: 'json',
        success : function(data){
             var cantidadProductos = data;
            $('#productos').val(cantidadProductos);
            console.log("Cantidad de productos:", cantidadProductos);
        },
        error: function (error){
            console.error('Error al obtener la cantidad de productos:', error);
        }
    });
}

function VentaTotal(){
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/ventas/totales',
        method: 'GET',
        dataType: 'json',
        success : function(data){
             var cantidadVentas = data;
            $('#ventas').val(cantidadVentas);
            console.log("Cantidad de ventas:", cantidadVentas);
        },
        error: function (error){
            console.error('Error al obtener la cantidad de ventas:', error);
        }
    });
}

function loadData() {
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data;
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html += `<tr>
                    <td>${item.nombreProducto}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.precio}</td>
                    <td>${item.porcentajeIva}</td>
                    <td>${item.porcentajeDescuento}</td>
                    <td>${item.state === true ? 'Activo' : 'Inactivo'}</td>
                   
                    </tr>`;
                });
            } else {
                console.error('el atributo "data" no es un arreglo: ', data);
            }
            $('#resultData').html(html);
        },
        error: function (error) {
            console.error('Error al registrar', error)
        }

    });
}