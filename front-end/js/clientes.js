function save() {
    var data = {
        'tipoIdentificacion': $('#tipoIdentificacion').val(),
        'identificacion': $('#identificacion').val(),
        'nombreCliente': $('#nombreCliente').val(),
        'apellidoCliente': $('#apellidoCliente').val(),
        'telefono': $('#telefono').val(),
        'direccion': $('#direccion').val(),
        'ciudad': $('#ciudad').val(),
        'state': $('#state').val() == 1 ? true : false
    };

    var jsonData = JSON.stringify(data);
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/clientes',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (data) {
            alert("Registro exitoso");
            loadData();
            clearData();
        },
        error: function (error) {
            console.error('Error al registrar', error)
        }

    });
}



function update() {
    var data = {
        'tipoIdentificacion': $('#tipoIdentificacion').val(),
        'identificacion': $('#identificacion').val(),
        'nombreCliente': $('#nombreCliente').val(),
        'apellidoCliente': $('#apellidoCliente').val(),
        'telefono': $('#telefono').val(),
        'direccion': $('#direccion').val(),
        'ciudad': $('#ciudad').val(),
        'state': parseInt($('#state').val())
    };
    var id = $('#id').val();
    var jsonData = JSON.stringify(data);

    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/clientes/' + id,
        method: "PUT",
        dataType: 'json',
        contentType: 'application/json',
        data: jsonData,
        success: function (result) {
            alert("Actualización exitosa");
            loadData();
            clearData();

            // actualizar botón
            var btnAgregar = $('button[name="btnAgregar"]');
            btnAgregar.text('Agregar');
            btnAgregar.attr('onclick', 'save()');
        },
        error: function (error) {
            console.error("Error al actualizar el registro:", error);
        }
    });
}


function loadData() {
    $.ajax({
        url: 'http://localhost:9000/prueba/v1/api/clientes',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            var html = '';
            var data = response.data;
            if (Array.isArray(data)) {
                data.forEach(function (item) {
                    html += `<tr>
                    <td>${item.tipoIdentificacion}</td>
                    <td>${item.identificacion}</td>
                    <td>${item.nombreCliente}</td>
                    <td>${item.apellidoCliente}</td>
                    <td>${item.telefono}</td>
                    <td>${item.direccion}</td>
                    <td>${item.ciudad}</td>
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
        url: 'http://localhost:9000/prueba/v1/api/clientes/' + id,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#id').val(data.data.id);
            $('#name').val(data.data.tipoIdentificacion);
            $('#email').val(data.data.identificacion);
            $('#phone').val(data.data.nombreCliente);
            $('#phone').val(data.data.apellidoCliente);
            $('#phone').val(data.data.telefono);
            $('#phone').val(data.data.direccion);
            $('#phone').val(data.data.ciudad);

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
        url: 'http://localhost:9000/prueba/v1/api/clientes/' + id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        alert("Registro eliminado exitoso");
        loadData();
        clearData();
    }).fail(function (xhr, status, error) {
        console.error("Error al eliminar el registro:", error);
    });
}


function clearData() {
    $('#id').val('');
    $('#tipoIdentificacion').val('');
    $('#identificacion').val('');
    $('#nombreCliente').val('');
    $('#apellidoCliente').val('');
    $('#telefono').val('');
    $('#direccion').val('');
    $('#ciudad').val('');
    $('#state').val('');
}