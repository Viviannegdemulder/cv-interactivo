$(document).ready(function () {

  // 1. Modo oscuro
  $("#btnTema").click(function () {
    $("body").toggleClass("dark-mode");
  });

  // 2. Resaltar habilidades
  $("#btnColor").click(function () {
    $(".skill").toggleClass("highlight");
  });

  // 3. Scroll animado navbar
  $(".nav-link").click(function (e) {
    e.preventDefault();
    const destino = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(destino).offset().top - 90
    }, 700);
  });

  // 4. Animación al aparecer secciones
  $(window).on("scroll", function () {
    $(".section-card").each(function () {
      const cardTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight - 100 > cardTop) {
        $(this).addClass("visible");
      }
    });
  }).trigger("scroll");

  // 5. Validación formulario
  $("#formContacto").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val().trim();

    if (email === "" || !email.includes("@")) {
      $("#mensaje").text("Correo inválido").addClass("text-danger");
    } else {
      $("#mensaje").text("Mensaje enviado correctamente").removeClass("text-danger").addClass("text-success");
      this.reset();
    }
  });

});
