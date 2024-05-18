// genera tooltip en botones del footer
var myBttns = $(".connectiontooltip");
console.log("--> ", myBttns);
new bootstrap.Tooltip(myBttns[0]);
new bootstrap.Tooltip(myBttns[1]);
new bootstrap.Tooltip(myBttns[2]);
new bootstrap.Tooltip(myBttns[3]);
new bootstrap.Tooltip(myBttns[4]);
new bootstrap.Tooltip(myBttns[5]);
new bootstrap.Tooltip(myBttns[6]);
// desaparece contenido en tarjetas al hacer click en img
$(document).ready(function(){
    $(".card-img-top").click(function(){
          $(".card-text").toggle();
    });
    });

// cambia de color titulos al hacer doble click
$(document).ready(function () {
    $(".h3-jq1").on("dblclick", function () {
          $(this).css({
                "color": "red",
          });
    });
});
$(document).ready(function () {
    $(".h3-jq2").on("dblclick", function () {
          $(this).css({
                "color": "red",
          });
    });
});

// genera alerta al hacer click
$(document).ready(function(){
    $(".btn").click(function(){
    alert("El formulario ha sido enviado exitosamente");
    });
    });