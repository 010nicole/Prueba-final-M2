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
$(document).ready(function () {
      $(".card-img-top").click(function () {
            $(".card-text").toggle();
      });
});

// cambia de color titulos al hacer doble click
$(document).ready(function () {
      $(".card-body").on("dblclick", function () {
            $(this).css({
                  "background-color": "red",
            });
      });
});

// genera alerta al hacer click
$(document).ready(function () {
      $(".btn").click(function () {
            alert("El formulario ha sido enviado exitosamente");
      });
});

// cambiar color de navbar
$(document).scroll(function (e) {
      const ubicacionScroll = $("html").scrollTop();
      console.log(" ubicacion scroll es:", ubicacionScroll);
      if (ubicacionScroll > 800) {
            $("nav").removeClass("navTransparent").addClass("navWhite")
      } else {
            $("nav").removeClass("navWhite").addClass("navTransparent")
      }
})

// Intento de cambiar el color del navbar tanto para ventana de pc como de mobile
// $(document).scroll(function (e) {
//       const ubicacionScroll = $("html").scrollTop();
//       if ((document).width() > "380") {
//             if (ubicacionScroll >= 800) {
//                   $("nav").removeClass("navTransparent").addClass("navWhite")
//             } else {
//                   $("nav").removeClass("navWhite").addClass("navTransparent")
//             }
//       } else {
//             if (ubicacionScroll >= 250) {
//                   $("nav").removeClass("navTransparent").addClass("navWhite")
//             } else {
//                   $("nav").removeClass("navWhite").addClass("navTransparent")
//             }
//       }

// })