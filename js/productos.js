
const obetenerDatos = ()=> {
    fetch("productos.json")
             .then(response => 
                response.json()
             )
             .then(data => {
                //console.table(data)
                baseDeDatos = data
                cargoGrillaContactos() 
             })
             

const cargoGrillaContactos = ()=> {
    let detalleTabla = ""
    baseDeDatos.forEach(contacto => {
          detalleTabla += `<tr>
                            <td>${contacto.id}</td>
                            <td>${contacto.nombre}</td>
                            <td>${contacto.telefono}</td>
                            <td>${contacto.email}</td>
                         </tr>`
    })
    tbody.innerHTML = detalleTabla
}

document.addEventListener("DOMContentLoaded", obtenerDatos)

}