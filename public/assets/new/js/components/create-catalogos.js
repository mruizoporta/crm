  

    function agregar() {
      let codigo = $("#codigo").val();
      let nombrevalor = $("#nombrevalor").val();
      
      console.log(codigo);

      if (nombrevalor.length > 0 ) {
    
          $("#tableproductos").append(`
                  <tr id="tr-${codigo}">
                      <td>
                          <input type="hidden" name="ids[]" value="0" />
                          <input type="hidden" name="codigo[]" value="${codigo}" />
                          <input type="hidden" name="nombresvalores[]" value="${nombrevalor}" />
                          ${codigo}    
                      </td>
                      <td>${nombrevalor}</td>
                      <td>
                        <button type="button" onclick="eliminar(${codigo})" class="tabledit-edit-button btn btn-sm btn-default" >
                                        <span class="glyphicon glyphicon-trash"></span>
                                      </button>

                       
                      </td>
                  </tr>

              `);
        
      } else {
          alert("Se debe ingresar una cantidad valido");
      }
    }
  
  
  function eliminar(id) {
   
    $("#tr-" + id).remove();
   
  } 