


function generarNumeroAleatorio() {

    let numero = Math.floor(Math.random() * 100) + 1;

    return numero;
}


function generarAleatorios() {

    let aleatorios = [];

    let cantidad = parseInt(
        document.getElementById("txtCantidad").value
    );

    if (cantidad >= 5 && cantidad <= 20) {
        
        for (let i = 0; i < cantidad; i++) {

        console.log(i);

        let numero = generarNumeroAleatorio();

        aleatorios.push(numero);
    }

        mostrarResultados(aleatorios);
    } else { 
        alert("Ingrese un número entre 5 y 20")

        
    }

    
}



function mostrarResultados(arregloNumeros) {

    let contenido = `
        <table>
            <tr>
                <th>Índice</th>
                <th>Número</th>
            </tr>
    `;

    for (let i = 0; i < arregloNumeros.length; i++) {

        contenido += `
            <tr>
                <td>${i}</td>
                <td>${arregloNumeros[i]}</td>
            </tr>
        `;
    }

    contenido += `</table>`;

    document.getElementById("resultado").innerHTML = contenido;
}