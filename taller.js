const personas = [];

document.getElementById("formPersona")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const persona = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value,
            genero: document.getElementById("genero").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            direccion: document.getElementById("direccion").value,
            fechaNacimiento: document.getElementById("fecha").value,
            foto: document.getElementById("foto").files[0] ? URL.createObjectURL(document.getElementById("foto").files[0]) : ''
        };

        personas.push(persona);
        alert(JSON.stringify(persona));

        const tabla = document.getElementById("tablaPersonas").getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        nuevaFila.insertCell(0).textContent = persona.nombre;
        nuevaFila.insertCell(1).textContent = persona.apellido;
        nuevaFila.insertCell(2).textContent = persona.edad;
        nuevaFila.insertCell(3).textContent = persona.genero;
        nuevaFila.insertCell(4).textContent = persona.correo;
        nuevaFila.insertCell(5).textContent = persona.telefono;
        nuevaFila.insertCell(6).textContent = persona.direccion;
        nuevaFila.insertCell(7).textContent = persona.fechaNacimiento;
        const fotoCell = nuevaFila.insertCell(8);
        if (persona.foto) {
            const img = document.createElement('img');
            img.src = persona.foto;
            img.width = 50;
            img.height = 50;
            fotoCell.appendChild(img);
        }
    });

document.getElementById("limpiarFormulario")
    .addEventListener("click", function() {
        document.getElementById("formPersona").reset();
    });