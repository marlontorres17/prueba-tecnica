function save() {
    var data = {
        'nombreProducto': $('#nombreProducto').val(),
        'descripcion': $('#descripcion').val(),
        'cantidad': $('#cantidad').val(),
        'precio': $('#precio').val(),
        'porcentajeIva': $('#porcentajeIva').val(),
        'porcentajeDescuento': $('#porcentajeDescuento').val(),
        'state': $('#state').val() == 1 ? true : false
    };

    var jsonData = JSON.stringify(data);
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (data) {
            Swal.fire('¡Registro exitoso!', '', 'success').then(function() {
                loadData();
                clearData();
            });
        },
        error: function (error) {
            console.error('Error al registrar', error)
        }

    });
}



function update() {
    var data = {
        'nombreProducto': $('#nombreProducto').val(),
        'descripcion': $('#descripcion').val(),
        'cantidad': $('#cantidad').val(),
        'precio': $('#precio').val(),
        'porcentajeIva': $('#porcentajeIva').val(),
        'porcentajeDescuento': $('#porcentajeDescuento').val(),
        'state': parseInt($('#state').val())
    };
    var id = $('#id').val();
    var jsonData = JSON.stringify(data);

    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos/' + id,
        method: "PUT",
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (result) {
            Swal.fire('¡Actualización exitosa!', '', 'success').then(function() {
                loadData();
                clearData();
    
                var btnAgregar = $('button[name="btnAgregar"]');
                btnAgregar.text('Agregar');
                btnAgregar.attr('onclick', 'save()');
            });
        },
        error: function (error) {
            console.error("Error al actualizar el registro:", error);
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
                    <td><button onclick="findById(${item.id})">Editar</button></td>
                    <td><button onclick="deleteById(${item.id})">Eliminar</button></td>
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

function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos/' + id,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#id').val(data.data.id);
            $('#name').val(data.data.nombreProducto);
            $('#email').val(data.data.descripcion);
            $('#phone').val(data.data.cantidad);
            $('#phone').val(data.data.precio);
            $('#phone').val(data.data.porcentajeIva);
            $('#phone').val(data.data.porcentajeDescuento);

            $('#state').val(data.data.state === true ? 1 : 0);

            //Cambiar boton.
            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text("Actualizar");
            btnAgregar.attr("onclick", "update()");
        },
        error: function (error) {
            console.error('Error al registrar:', error)
        }
    });
}

function deleteById(id) {
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/productos/' + id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        Swal.fire('¡Registro eliminado!', '', 'success').then(function() {
            loadData();
            clearData();
        });
    }).fail(function (xhr, status, error) {
        console.error("Error al eliminar el registro:", error);
    });
}


function clearData() {
    $('#id').val('');
    $('#nombreProducto').val('');
    $('#descripcion').val('');
    $('#cantidad').val('');
    $('#precio').val('');
    $('#porcentajeIva').val('');
    $('#porcentajeDescuento').val('');
    $('#state').val('');
}