  
  // Evento que se activa al enviar el formulario
  document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    // Obtenemos el valor del input
    var nombre   =     document.getElementById("nombre").value;
    // var apellido =     document.getElementById("apellido").value;
    // var correo   =     document.getElementById("email").value;
    // var direccion =    document.getElementById("direccion").value;
    // var producto =     document.getElementById("producto").value;
    //  var tarjeta =      document.getElementById("numero-tarjeta").value;
    // var Vencimiento =  document.getElementById("caducidad").value;
    // var Cvv =          document.getElementById("cvv").value;
    // Almacenamos el valor en el almacenamiento local
    localStorage.setItem("Compra", nombre);
    // localStorage.setItem("Compra", apellido);
    // localStorage.setItem("Compra", correo);
    // localStorage.setItem("Compra", direccion);
    // localStorage.setItem("Compra", producto);
    // localStorage.setItem("Compra", tarjeta);
    // localStorage.setItem("Compra", Vencimiento);
    // localStorage.setItem("Compra", Cvv);
    
    alert("Datos guardados en el almacenamiento local.");
  });
  
  // Comprobar si hay un nombre guardado y mostrarlo
  var Compra = localStorage.getItem("DatosCompra");
  if (Compra) {
    document.getElementById("nombre").value = Compra;
    // document.getElementById("apellido").value = Compra;
    // document.getElementById("email").value = Compra;
    // document.getElementById("direccion").value = Compra;
    // document.getElementById("producto").value = Compra;
    // document.getElementById("numero-tarjeta").value = Compra;
    // document.getElementById("caducidad").value = Compra;
    // document.getElementById("cvv").value = Compra;
  }
  console.log(Compra);