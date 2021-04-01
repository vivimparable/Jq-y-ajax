$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt",function(data){
            $("#datosvalue").html(
                `
                Acudit: ${data}
                `
            );
            
            });
        });

        $("#leervalue").click(function (e) { 
            e.preventDefault();
            $.get("acudit.json", function(data){

                console.log(data);

                $("#datosvalue").html(
                    `
                    Nombre: ${data.joke} <br>
                    `
                );
            });
            
        });
        $("#leervalue2").click(function (e) { 
            e.preventDefault();
            $("#datosvalue").html("")
            $.get("empleadoplural.json", function(data){
                console.log(data);
                $("#datosvalue").html("")
                $.each(data, function (index, item) { 
                     $("#datosvalue").html($("#datosvalue").html()+

                        `
                        <ul>
                      <li> Nombre: ${item.Name} </li>  
                      <li>  Apellido:${item.Surname} </li>  
                      <li>  Puesto:${item.Puesto} </li>  

                        </ul>

                        `
                     );
                });
            });
        });

        $("#leervalue3").click(function (e) { 
            e.preventDefault();
            $.getJSON("empleadoplural.json", function(data){
                $("#datosvalue").html("")
                $.each(data.empleados, function (index, item) { 
                    $("#datosvalue").html($("#datosvalue").html()+

                       `
                       <ul>
                     <li> Nombre: ${item.Name} </li>  
                     <li>  Apellido:${item.Surname} </li>  
                     <li>  Puesto:${item.Puesto} </li>  

                       </ul>

                       `
                    );
               });
                
            });
        });


    }); 


