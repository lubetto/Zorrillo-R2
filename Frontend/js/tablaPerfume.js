////////////        FUNCION PARA TRAER TODOS LOS USUARIOS      /////////////////////
function getInfoFragance() {
    $.ajax({
        url: "http://localhost:8080/api/fragance/all",
        //url:"http://155.248.195.219:8080/api/fragance/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            showInfoFragance(respuesta);
        }
    });
}

////////////        FUNCION PARA PINTAR LA TABLA CON LAS CATEGORIAS      /////////////////////
function showInfoFragance(items) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>Editar</th>";
    myTable += "<th>Eliminar</th>";
    myTable += "<th>Referencia</th>";
    myTable += "<th>Marca</th>";
    myTable += "<th>Categoria</th>";
    myTable += "<th>Descripcion</th>";
    myTable += "<th>Disponibilidad</th>";
    myTable += "<th>Precio</th>";
    myTable += "<th>Stock</th>";
    myTable += "<th>Foto</th>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td> <button onclick='preUpdateFragance(" + items[i].reference + ")'>Editar</button>";
        myTable += "<td> <button onclick='deleteInfoFragance(" + items[i].reference + ")'>Eliminar</button>";
        myTable += "<td>" + items[i].reference + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].category + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td>" + items[i].availability + "</td>";
        myTable += "<td>" + items[i].price + "</td>";
        myTable += "<td>" + items[i].quantity + "</td>";
        myTable += "<td>" + items[i].photography + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoProductos").html(myTable);
}
