////////////        FUNCION PARA TRAER TODOS LOS USUARIOS      /////////////////////
function getInfoUser() {
    $.ajax({
        url: "http://localhost:8080/api/user/all",
        //url:"http://155.248.195.219:8080/api/user/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            showInfoUsers(respuesta);
        }
    });
}

////////////        FUNCION PARA PINTAR LA TABLA CON LAS CATEGORIAS      /////////////////////
function showInfoUsers(items) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>Editar</th>";
    myTable += "<th>Eliminar</th>";
    myTable += "<th>Identificacion</th>";
    myTable += "<th>Nombre</th>";
    myTable += "<th>Email</th>";
    myTable += "<th>Perfil</th>";
    myTable += "<th>Zona</th>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td> <button onclick='preUpdateUsers(" + items[i].id + ")'>Editar</button>";
        myTable += "<td> <button onclick='deleteInfoUsers(" + items[i].id + ")'>Eliminar</button>";
        myTable += "<td>" + items[i].identification + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].type + "</td>";
        myTable += "<td>" + items[i].zone + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoUsuarios").html(myTable);
}
