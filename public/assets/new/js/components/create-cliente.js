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


function guardarcliente() {	

	let url_route_estado = '/ordenes/clientes'; 
	var formData = {
             nombres:$("#nombres").val(),
             apellidos:$("#apellidos").val(),
             identificacion:$("#identificacion").val(),
             direccion:$("#direccion").val(),
             esjuridico:$("#demo-sw-unchecked").val(),           
             telefono:$("#telefono").val(),
             correo:$("#correo").val(),	

             razonsocial:$("#razonsocial").val(),
             identificacionjuridico:$("#identificacionjuridico").val(),	
             correojuridico:$("#correojuridico").val(),	
             telefonojuridico:$("#telefonojuridico").val(),	
             direccionjuridico:$("#direccionjuridico").val(),
             nombrecontacto:$("#nombrecontacto").val(),
             correocontacto:$("#correocontacto").val(),
             telefonocontacto:$("#telefonocontacto").val(),

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
				});
                window.close;
			  }
		});
	} 