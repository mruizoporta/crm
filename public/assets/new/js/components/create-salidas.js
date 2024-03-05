$(function() {
			
  /* ==========================================================================
   Datepicker
   ========================================================================== */

  $('.datetimepicker').datetimepicker({

showTodayButton: true,
      widgetPositioning: {
          horizontal: 'right',
vertical: 'top'
      },
      debug: false
  })

});


$(document).ready(function(){
$('#bt_add').click(function(){
agregar();
});

});

let cont = 0;
total=0;
subtotal = [];

$("#guardar").hide();
$("#productoid").change(mostrarValores);

function mostrarValores()
{
datosArticulo = document.getElementById('productoid').value.split('_');
$("#cantidad").val(datosArticulo[1]);
$("#unidad").val(datosArticulo[2]);
}

function limpiar()
{
$("#cantidad").val("");    
}


function agregar() {
datosArticulo = document.getElementById('productoid').value.split('_');

idproducto = datosArticulo[0];
producto =$("#productoid option:selected").text();
let cantidad = $("#cantidad").val();


let producto_id = $("#producto_id option:selected").val();
let producto_text = $("#producto_id option:selected").text();


if (idproducto != "" && cantidad != "" && cantidad>0 ) {

let fila = `
        <tr  id="fila` + cont +
        `"><td><input type="hidden" name="producto_id[]" value="`+ idproducto + `"/>` +                   
          producto +    
        `</td> ` + 
        `<td><input type="number"  class="form-control" id="cantidad[`+ cont +`]"` + ` name="cantidades[]" value="`+ cantidad + `"/></td>` +
     
        `<td><button type="button"  class="tabledit-edit-button btn btn-sm btn-default" onclick="eliminar(` + cont + `)"> ` +
        `<span class="glyphicon glyphicon-trash"></span></button> </td></tr>`;
cont ++;
limpiar();     
$("#guardar").show();
$("#tableproductos").append(fila);         

} else {
alert("Error al ingresar el detalle de la entrada, revise los datos del articulo");
}
}    

function eliminar(index) 
{

$("#fila" + index).remove();

}



