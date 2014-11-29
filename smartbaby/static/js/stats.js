
 $(function() {
        $.material.init();
    });

    $( "a" ).click(function() {
        $('.modal-open-menu').toggleClass('modal-visible');
        $(".doc-nav-active").toggleClass("doc-nav-active");
        $(this).closest("li").toggleClass("doc-nav-active");
        $('body').toggleClass('doc-nav-shown');
        $('.content').toggleClass('return-content');
    });

    $("#toggleMenu").on("click", function(){
        $('.modal-open-menu').toggleClass('modal-visible');
        $('body').toggleClass('doc-nav-shown');
        $('.content').toggleClass('return-content');
    });

    $(".modal-open-menu").on("click", function(){
        $('.modal-open-menu').toggleClass('modal-visible');
        $('body').toggleClass('doc-nav-shown');
        $('.content').toggleClass('return-content');
    });



    function actualizarDatosPartidas() {
        $('#total_partidas').html(total_partidas_paint);
        total_partidas_paint++;
        $total_partidas--;
        if ($total_partidas > 0)
        window.setTimeout(actualizarDatosPartidas, 100);
    }

    function actualizarDatosAciertos() {
        $('#respuestas_acertadas').html(respuestas_acertadas_paint);
        respuestas_acertadas_paint++;
        $respuestas_acertadas--;
        if ($respuestas_acertadas > 0)
        window.setTimeout(actualizarDatosAciertos, 100);
    }

    function actualizarDatosAprobados() {
        $('#partidas_aprobadas').html(partidas_aprobadas_paint);
        partidas_aprobadas_paint++;
        $partidas_aprobadas--;
        if ($partidas_aprobadas > 0)
        window.setTimeout(actualizarDatosAprobados, 100);
    }

    actualizarDatosAprobados();

    actualizarDatosAciertos();

    actualizarDatosPartidas();

    function barChart() {

      $("#bars li .bar").each( function( key, bar ) {
        var percentage = $(this).data('percentage');

        $(this).animate({
          'height' : percentage + '%'
        }, 1000);
      });
    };

    barChart();