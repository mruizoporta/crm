$(document).ready(function() {

    $.ajaxSetup({
        headers: {'X-CSRF-Token': $('meta[name=_token]').attr('content')}
    });

    $('#bootbox-plantilla-h-form').on('click', function(){
        bootbox.dialog({
            title: "Orden de trabajo.",
            message:'<div class="row"> ' + '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' + '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Plantilla</label> ' +                   
                    '<label class="form-radio form-icon demo-modal-radio active"><input type="radio" autocomplete="off" name="awesomeness" value="Really awesome" checked> Really awesome</label>' +
                    '<label class="form-radio form-icon demo-modal-radio"><input type="radio" autocomplete="off" name="awesomeness" value="Super awesome"> Super awesome </label> </div>' +
                    '</div> </div>' + '</form> </div> </div><script></script>',
            buttons: {
                success: {
                    label: "Save",
                    className: "btn-purple",
                    callback: function() {
                        var name = $('#name').val();
                        var answer = $("input[name='awesomeness']:checked").val();

                        $.niftyNoty({
                            type: 'purple',
                            icon : 'fa fa-check',
                            message : "Hello " + name + ".<br> You've chosen <strong>" + answer + "</strong>",
                            container : 'floating',
                            timer : 4000
                        });
                    }
                }
            }
        });

        $(".demo-modal-radio").niftyCheck();
    });

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

	$("#ordengrantotal").val(totaladicionales);
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
			resultadototalsinadicionales.textContent =  parseFloat(grantotalsinadicional) ;

			$("#ordengrantotal").val((parseFloat(grantotal) + totaladicionales).toFixed(2));
			$("#ordentotalsinadicionales").val(parseFloat(grantotalsinadicional));

			$('#infoproducto').css('display', 'none');
			$("#cantidad").val("");
	} else {
		alert("Se debe ingresar una cantidad o precio valido");
	}
  }
  
  function agregarproducto() {
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


