
function calcularprecio() {   
    let costo = $("#costopromedio").val();
    let margen = $("#margenutilidadcontado").val();

    let porcentaje =1-(margen/100);
    let precio =  parseFloat(parseFloat(costo)/parseFloat(porcentaje)).toFixed(2);
   
    $("#preciocontado").val(precio);
}

function calcularmargen() {    
    let costo = $("#costopromedio").val();
    let precio = $("#preciocontado").val();
    let margen = parseFloat(((precio-costo)/precio)*100).toFixed(2);
    
    $("#margenutilidadcontado").val(margen);
}

   