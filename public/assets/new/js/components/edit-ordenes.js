
$(document).ready(function(){

	
	$('#demo-sw-unchecked').change(function(){

		if($(this).is(':checked'))
		{
   			$('#natural').css('display', 'none');
			$('#juridico').css('display', 'block');
  		}else
		{
   			$('#natural').css('display', 'block');
			$('#juridico').css('display', 'none')
  		}  
  });

  $('#demo-sw-insumosoperativos').change(function(){	
		calculartotal();
	});

	$('#demo-sw-horasextras').change(function(){	
		calculartotal();
	});

	$('#demo-sw-manoobraexterna').change(function(){	
		calculartotal();
	});

  	new Switchery(document.getElementById('demo-sw-insumosoperativos'));
    new Switchery(document.getElementById('demo-sw-horasextras'));
    new Switchery(document.getElementById('demo-sw-manoobraexterna'));
	new Switchery(document.getElementById('demo-sw-ordencompletada'));

});

let select = document.querySelector('#producto_id');
let resultunidad = document.querySelector('#lblunidadmedida');
let resultadoprecio = document.querySelector('#lblprecio');

select.addEventListener('change', function () {

	$('#infoproducto').css('display', 'block');
	let producto_select = "unidad_" + $("#producto_id option:selected").val();
	let precio_select = "precio_" + $("#producto_id option:selected").val();	
	resultunidad.textContent = $("#"+producto_select ).val();
	resultadoprecio.textContent = $("#"+precio_select).val();	
});

function calculartotal()
{
	let resultadototalsinadicional =$("#totalsinadicionales").text();
	console.log(resultadototalsinadicional);
	let resultadototal =document.querySelector('#total');

	let porinsumos = $("#por_insumosoperativos").val();
	let pormanoobra = $("#por_manoobraexterna").val();
	let porhorasextras = $("#por_horasextras").val();

	let totalporcentaje = 0.0;
	let totaladicionales = 0.0;

	if( $('#demo-sw-insumosoperativos').is(':checked') ) 
	{
    	totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(porinsumos);			
	}

	if( $('#demo-sw-manoobraexterna').is(':checked') ) 
	{
    	totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(pormanoobra);				
	}

	if( $('#demo-sw-horasextras').is(':checked') ) 
	{
		totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(porhorasextras); 				   			
	}
	
	totaladicionales = (totalporcentaje * ((resultadototalsinadicional)/100));
	resultadototal.textContent = parseFloat(resultadototalsinadicional) + totaladicionales ;

	$("#ordengrantotal").val(parseFloat(resultadototalsinadicional) + totaladicionales);
	$("#ordentotalsinadicionales").val(resultadototalsinadicional);
}

  function agregar() {
	let producto_id = $("#producto_id option:selected").val();
	let producto_text = $("#producto_id option:selected").text();	
	let unidad_text = $("#lblunidadmedida").text();
	let precio_text = $("#lblprecio").text();
	let cantidad = $("#cantidad").val();
	let total_linea = parseFloat(cantidad) * parseFloat(precio_text);

	let resultadototalsinadicionales =document.querySelector('#totalsinadicionales');
	let resultadototal =document.querySelector('#total');
	
	let totalanterior = parseFloat($('#total').text());	
	let totalanteriorsinadicionales = parseFloat($('#totalsinadicionales').text());
	
	//Obtener porcentajes
	let porinsumos = $("#por_insumosoperativos").val();
	let pormanoobra = $("#por_manoobraexterna").val();
	let porhorasextras = $("#por_horasextras").val();

	let totalporcentaje = 0.0;
	let totaladicionales = 0.0;
	let grantotal = 0.0;
	let grantotalsinadicional = 0.0;

	if (cantidad > 0 ) {
  
		$("#tableproductos").append(`
				<tr id="tr-${producto_id}">
					<td>
						<input type="hidden" name="producto_id[]" value="${producto_id}" />
						<input type="hidden" name="cantidades[]" value="${cantidad}" />
						<input type="hidden" name="precios[]" value="${precio_text}" />
						<input type="hidden" name="totales[]" value="${parseFloat(cantidad) * precio_text}" />
						${producto_text}    
					</td>
					<td>
						${unidad_text}
					</td>					
					<td>${precio_text}</td>
					<td>${cantidad}</td>
					<td>${parseFloat(cantidad) * precio_text}</td>
					<td>
						<button type="button" class="btn btn-danger" onclick="eliminar(${producto_id}, ${parseFloat(cantidad) * parseFloat(precio_text)})">X</button>    
					</td>
				</tr>
			`);

			grantotal = parseFloat(totalanterior) + parseFloat(total_linea);
			console.log(grantotal);
			grantotalsinadicional = parseFloat(totalanteriorsinadicionales) + parseFloat(total_linea);

			if( $('#demo-sw-insumosoperativos').is(':checked') ) 
			{
				
    			totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(porinsumos);			
			}

			if( $('#demo-sw-manoobraexterna').is(':checked') ) 
			{
			
    			totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(pormanoobra);				
			}

			if( $('#demo-sw-horasextras').is(':checked') ) 
			{
				
				totalporcentaje = parseFloat(totalporcentaje) +  parseFloat(porhorasextras); 				   			
			}
			
			totaladicionales = (totalporcentaje * ((grantotal)/100));

			resultadototal.textContent = (parseFloat(grantotal) + totaladicionales).toFixed(2) ;
			console.log((parseFloat(grantotal) + totaladicionales).toFixed(2));
			resultadototalsinadicionales.textContent =  parseFloat(grantotalsinadicional) ;

			$("#ordengrantotal").val((parseFloat(grantotal) + totaladicionales).toFixed(2));
			$("#ordentotalsinadicionales").val(parseFloat(grantotalsinadicional));

			$('#infoproducto').css('display', 'none');
			$("#cantidad").val("");
	} else {
		alert("Se debe ingresar una cantidad o precio valido");
	}
  }
  
  
  function eliminar(id, subtotal) {
	$("#tr-" + id).remove();
	let precio_total = $("#precio_total").val() || 0;
	$("#precio_total").val(parseInt(precio_total) - subtotal);
  }
  
  function iniciar(id)
  {	
  	$("#" + id).val(id);
  }
 

  function cambiarestado(id) {	
    
   var url_route_estado = '/ordenes/completar'; 
    var formData = {
              id: id,              
			  comentario: $("#comentariotarea-"+id).val(),
			  _token:$('input[name="_token"]').val()
              }
    $.ajax({
			  url: url_route_estado,			 
              method: 'POST',
			  data: JSON.stringify(formData) 
          }).done(function (res) { 

			if ( document.getElementById( "lblprogreso-"+id )) {
				document.getElementById("lblprogreso-"+id).className = "label label-success";
				document.getElementById("lblprogreso-"+id).innerHTML = "Completada";   
			}else{
				document.getElementById("lblpendiente-"+id).className = "label label-success";
				document.getElementById("lblpendiente-"+id).innerHTML = "Completada";   
			}     
            document.getElementById("btncompletar-"+id).style.display = "none";

            $('#demo-acd-info-outline-'+id).removeClass("panel-collapse off collapse in").addClass("panel-collapse collapse off");

            $("#btnaperturar-"+id).show();
			Swal.fire({
				icon: 'success',
				timer: 2000,
				title: res.msg,
				showConfirmButton: false,
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
				})
        	});
    }   

	function iniciar(id) {	

	var url_route_estado = '/ordenes/iniciar'; 
	var formData = {
			id: id,			
			_token:$('input[name="_token"]').val()
			}
            console.log(formData);
	$.ajax({
			url: url_route_estado,			 
			method: 'POST',
			data: JSON.stringify(formData) 
		}).done(function (res) {
			if (res.status=1)
              {   
				console.log(res) 
				if ( document.getElementById( "lblpendiente-"+id )) {
					document.getElementById("lblpendiente-"+id).className = "label label-warning";
					document.getElementById("lblpendiente-"+id).innerHTML = "En progreso"; 
				}else
				{
					document.getElementById("lblprogreso-"+id).className = "label label-warning";
					document.getElementById("lblprogreso-"+id).innerHTML = "En progreso"; 
				}
				$("#btncompletar-"+id).show();
				$('#demo-acd-info-outline-'+id).removeClass("panel-collapse off collapse in").addClass("panel-collapse collapse off");
				
				Swal.fire({
				icon: 'success',
				timer: 2000,
				title: res.msg,
				showConfirmButton: false,
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
				})
			  }
		});
	} 


	function agregarformapago() {
		let formas_id = $("#formas_id option:selected").val();
		let forma_text = $("#formas_id option:selected").text();
		let moneda_id = $("#moneda_id option:selected").val();
		let moneda_text = $("#moneda_id option:selected").text();
		let montopagar = $("#montopagar").val();
		let montopendiente =$("#montopendiente").text();
console.log(montopendiente);
		let resultadototalpagar =document.querySelector('#totalrecibido');		
		let totalanteriorpagar = parseFloat($('#totalrecibido').text());	

		if (montopagar > 0 ) {
	  
			$("#tableformaspago").append(`
					<tr id="tr-${formas_id}">
						<td>
							<input type="hidden" name="formas_id[]" value="${formas_id}" />
							<input type="hidden" name="monedaspagar_id[]" value="${moneda_id}" />
							<input type="hidden" name="montospagar[]" value="${montopagar}" />
							${forma_text}    
						</td>
						<td>
							${moneda_text}
						</td>					
						<td>${montopagar}</td>
						<td>
							<button type="button" class="btn btn-danger" onclick="eliminarformas(${formas_id}, ${parseFloat(montopagar)})">X</button>    
						</td>
					</tr>
				`);
	
				let grantotalpagar = parseFloat(totalanteriorpagar) + parseFloat(montopagar);	
				resultadototalpagar.textContent = (parseFloat(grantotalpagar)).toFixed(2) ;
				$("#montopendiente").text(parseFloat(montopendiente) - parseFloat(montopagar));
	
		} else {
			alert("Se debe ingresar un monto valido");
		}
	  }
	  
	  
	  function eliminarformas(id, subtotal) {
		$("#tr-" + id).remove();
		let totalrecibido = $("#totalrecibido").text() || 0;	
		let totalpendiente = $("#montopendiente").text() || 0;		
		$("#totalrecibido").text(parseFloat(totalrecibido) - subtotal);
		$("#montopendiente").text(parseFloat(totalpendiente) + subtotal);
	  }
  
