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

function loadTop() {
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos/top',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            if (Array.isArray(response)) {
                response.forEach(function (item) {
                    html += `<tr>
                    <td>${item.nombreProducto}</td>
                    <td>${item.descripcion}n</td>
                    <td>${item.cantidad}</td>
                    <td>${item.precio}</td>
                    <td>${item.porcentajeIva}</td>
                    <td>${item.porcentajeDescuento}</td>
                    <td>${item.state === true ? 'Activo' : 'Inactivo'}</td>
                    </tr>`;




                });
            } else {
                html += `<tr>
                    <td>${response.nombreProducto}</td>
                    <td>${response.descripcion}</td>
                    <td>${response.cantidad}</td>
                    <td>${response.precio}</td>
                    <td>${response.porcentajeIva}</td>
                    <td>${response.porcentajeDescuento}</td>
                    <td>${item.state === true ? 'Activo' : 'Inactivo'}</td>

                    
                    </tr>`;
            }
            $('#resultData').html(html);
        },
        error: function (error) {
            console.error('Error al obtener a Colombia', error)
        }
    });
}