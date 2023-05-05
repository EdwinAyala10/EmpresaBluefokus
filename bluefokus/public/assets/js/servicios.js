
(function($) {
    "use strict";
    /*================================
    Preloader
    ==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function() {
        setTimeout(function() {
            preloader.fadeOut('slow', function() { $(this).remove(); });
        }, 300)
    });

    /*================================
    sidebar collapsing
    ==================================*/
    if (window.innerWidth <= 1364) {
        $('.page-container').addClass('sbar_collapsed');
    }
    $('.nav-btn').on('click', function() {
        $('.page-container').toggleClass('sbar_collapsed');
    });

    /*================================
    Start Footer resizer
    ==================================*/
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    /*================================
    sidebar menu
    ==================================*/
    $("#menu").metisMenu();

    /*================================
    slimscroll activation
    ==================================*/
    $('.menu-inner').slimScroll({
        height: 'auto'
    });
    $('.nofity-list').slimScroll({
        height: '435px'
    });
    $('.timeline-area').slimScroll({
        height: '500px'
    });
    $('.recent-activity').slimScroll({
        height: 'calc(100vh - 114px)'
    });
    $('.settings-list').slimScroll({
        height: 'calc(100vh - 158px)'
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*================================
    form bootstrap validation
    ==================================*/
    $('[data-toggle="popover"]').popover()

    /*------------- Start form Validation -------------*/
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*================================
    datatable active
    ==================================*/
    if ($('#dataTable').length) {
        $('#dataTable').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable2').length) {
        $('#dataTable2').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable3').length) {
        $('#dataTable3').DataTable({
            responsive: true
        });
    }


    /*================================
    Slicknav mobile menu
    ==================================*/
    $('ul#nav_menu').slicknav({
        prependTo: "#mobile_menu"
    });

    /*================================
    login form
    ==================================*/
    $('.form-gp input').on('focus', function() {
        $(this).parent('.form-gp').addClass('focused');
    });
    $('.form-gp input').on('focusout', function() {
        if ($(this).val().length === 0) {
            $(this).parent('.form-gp').removeClass('focused');
        }
    });

    /*================================
    slider-area background setting
    ==================================*/
    $('.settings-btn, .offset-close').on('click', function() {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });

    /*================================
    Owl Carousel
    ==================================*/
    function slider_area() {
        var owl = $('.testimonial-carousel').owlCarousel({
            margin: 50,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1360: {
                    items: 1
                },
                1600: {
                    items: 2
                }
            }
        });
    }
    slider_area();

    /*================================
    Fullscreen Page
    ==================================*/

    if ($('#full-view').length) {

        var requestFullscreen = function(ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var exitFullscreen = function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var fsDocButton = document.getElementById('full-view');
        var fsExitDocButton = document.getElementById('full-view-exit');

        fsDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            requestFullscreen(document.documentElement);
            $('body').addClass('expanded');
        });

        fsExitDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            exitFullscreen();
            $('body').removeClass('expanded');
        });
    }

    $(document).ready(function(){
        let numeroDocumento = window.atob($("#documento").val());
        $('#dataTable-servicios').DataTable().destroy();
        fn_ServiciosNoDT(numeroDocumento);
        //fn_prueba_conexion(numeroDocumento);
        //fn_Contratos();
	})
    function fn_prueba_conexion(numero) {
        debugger;
        $.ajax ({
                type: "POST",
                url: 'controller/consulta.controller.php?page=iListarContratos',
                data: {'ndoc': numero},
                dataType: 'json',
                success: function(json) {
                    alert("sss");
                    console.log(json);
                    let mio = JSON.parse(json);
                    let arrPDF = mio['ContratoListar'];
                    console.log(arrPDF);

                }
                /*dataSrc: function (json) {
                    debugger;
                    json = JSON.parse(data);
                    json = json['ComprobanteContratoListar'];
                    console.log(json);
                    if (json == null) {
                        $("#dataTable-servicios tbody").empty();
                        let text = '';
                        text = '<div align="center" style="width:100%;text-align:center;font-weight:bold;line-height:250px;">NO SE PUDO OBTNER LA INFORMACION</div>';
                        $("#dataTable-servicios tbody").append(text);
                    }
                        return json;
                }*/
        })
    }
    function fn_ServiciosNoDT(numero) {
        $.ajax({
            type: "POST",
            url: 'controller/consulta.controller.php?page=iListarContratos',
            data: {'ndoc': numero},
            dataType: 'json',
            success: function (result) {
                debugger;
                result = JSON.parse(result);
                let text = '';
                console.log(result);
                  if (result['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                    var datacontratos = result['ContratoListar'];
                    console.log(datacontratos);
                    console.log("nose");
                      if (datacontratos == null) {
                        text = '<div class="text-center" style="width:100%;text-align:center;font-weight:bold;line-height:250px;color:#fff">NO SE PUDO OBTENER LA INFORMACION</div>';
                        $("#prueba").append(text);
                      } else {
                            $(".user-name").text("Hola, " + datacontratos[0].RAZON_SOCIAL);
                            for ( var i = 0; i < datacontratos.length; i++ ) {
                                console.log(datacontratos[i]);
                                console.log(datacontratos[i].SERVICIO_OBI);
                                var vigenciaIni = datacontratos[i].VIGENCIA_INI.split("-");
                                vigenciaIni = `${vigenciaIni[2]}-${vigenciaIni[1]}-${vigenciaIni[0]}`;
                                var vigenciaFin = datacontratos[i].VIGENCIA_FIN.split("-");
                                vigenciaFin = `${vigenciaFin[2]}-${vigenciaFin[1]}-${vigenciaFin[0]}`;
                                text=`<div class="col-lg-6 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="alert alert-primary" role="alert" style="color:white;background:linear-gradient(90deg,#eb5c1c,#f5a700)!important">
                                                    <div style="background: #FFC107;color:#300190;font-weight:700;font-size:15px;width:30px;height:30px;border-radius:250px;text-align:center;padding-top:5px;margin-bottom:10px;">${i + 1}</div>
                                                    <h6 class="alert-heading" style="font-weight:700;color:#fff">${datacontratos[i].ID_CONTRATO}-${datacontratos[i].SERV_DIRECCION}</h6><br/>
                                                    <p style="color:white">
                                                        Fecha de Inicio: ${vigenciaIni}<br/>
                                                        Fecha de Término: ${vigenciaFin}<br/>
                                                        Cargo Fijo Mensual (sin IGV): ${datacontratos[i].MONEDA} ${(datacontratos[i].RENTA_MENSUAL)}<br/>
                                                        Servicio: ${datacontratos[i].SERVICIO_OBI}<br/>
                                                        <hr/>
                                                        <div class="alert alert-info" role="alert">
                                                            <strong>Status:</strong> ${datacontratos[i].ESTADO}
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                      </div>`;
                                }
                            }

                            console.log(text);
                        $(".box-contrato").append(text);
                      }
                  },
               error: function (msg) {
                console.log(msg);
            }
        })
    }

    function fn_ServiciosDT(numero) {

        var t= $("#dataTable-servicios").DataTable({
            pageLength: 10,
            responsive: true,
            lengthChange: false,
            bFilter: false,
            paging:   false,
            ordering: false,
            info:     false,
            //order: [[ 2, "desc" ]],

            drawCallback: function( settings ) {
                $(".sorting_disabled").css("color","white");
            },
        columnDefs: [ { type: 'string', 'targets': [0,1], visible:true }, {'targets': '_all', visible: false }],
            language: {

                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                    },
                    "oAria": {
                        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                },
            ajax: {
                type: "POST",
                url: 'controller/consulta.controller.php?page=iListarContratos',
                data: {'ndoc': numero},
                dataType: 'json',
                dataSrc: function (result) {
                    result = JSON.parse(result);
                    console.log(result);
                      if (result['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                        var datacontratos = result['ContratoListar'];
                          if (datacontratos == null) {
                            //$("#tbody-servicios tbody").empty();
                            let text = '';
                            text = '<tr><td><div align="center" style="width:100%;text-align:center;font-weight:bold;line-height:250px;color:#fff">NO SE PUDO OBTENER LA INFORMACION</div></td></tr>';
                            $("#dataTable-servicios").append(text);
                          } else {
                                $(".user-name").text("Hola, " + datacontratos[0].RAZON_SOCIAL);
                                return(datacontratos);
                          }
                      }

                },
                error: function (msg) {
                    console.log(msg);
                }
            },
            columns: [
            {
                "title": "", "mData": null, "bSortable": false, className: "text-left",
                "mRender": function (row, type, full, meta) {

                    return '<div class="alert alert-primary" role="alert" style="color:white;background:#300190">' + '<div style="background: #FFC107;color:#300190;font-weight:700;font-size:15px;width:30px;height:30px;border-radius:250px;text-align:center;padding-top:5px;margin-bottom:10px;">' + (meta.row + 1) + '</div>' +
                           '<h6 class="alert-heading" style="font-weight:700;color:#FFC107">' + row["ID_CONTRATO"]+'-'+row["SERV_DIRECCION"] + '</h6><br/>'+
                           '<p style="color:white"> Fecha de Inicio: ' + row["VIGENCIA_INI"] + '<br/>'+
                           'Fecha de Término: ' + row["VIGENCIA_FIN"] + '<br/>'+
                           'Cargo Fijo Mensual: ' + row["MONEDA"] + ' ' + row["RENTA_MENSUAL"] + '<br/>'+
                           'Servicio: ' + row["SERVICIO"].split("::")[1] + '<br/>'+
                           '<hr/>' +
                           '<strong>Status</strong>: ' + row["ESTADO"] + '</p>';
                },
                "width": 500
            },
            {
                "title": "", "mData": null, "bSortable": false, className: "text-center",
                "mRender": function (row) {
                    return '';
                }
            }
        ]
        });

    }

    function fn_Contratos(){
        let numeroDocumento = window.atob($("#documento").val());
        $.ajax({
            type: 'POST',
            url: 'controller/consulta.controller.php?page=iListarContratos',
            data: {'ndoc': numeroDocumento},
            dataType: 'json',
            success: function (data) {
                debugger;
                data = JSON.parse(data);
                if (data['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                    /*let numeroDocumento = $("#documento").val();
                let empresaId = 10;
                let sector = 'ULT';

                let emp = window.btoa("EmpresaId");
                let sec = window.btoa("Sector");
                let num = window.btoa("NumeroDocumento");
                let url = "principal.php?"+ emp +"="+ empresaId +"&" + sec + "="+ sector +"&" + num + "="+window.btoa(numeroDocumento);

                window.location = url;
                */
                $("#prueba").text(data['ContratoListar'][0].SERV_DIRECCION);
                }else{
                    window.location = 'error.php';
              }
            },
            complete: function(data){
            },
            error: function (msg) {
              console.log(msg);
            }
        })
    }


    function fn_Descargar(){
        let numeroDocumento = $("#documento").val();
        let empresaId = 10;
        let esUltra = true;

        $.ajax({
            type: 'POST',
            url: urlws,
            data: {'empresaId': empresaId, 'esUltra': esUltra, 'numeroDocumento': numeroDocumento},
            dataType: 'json',
            success: function (data) {
                if (data['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                    var bydata = base64ToArrayBuffer(data['Comprobante'].ByteData);
                    var nomArchivo = data['Comprobante'].Serie + ' - ' + data['Comprobante'].Numero + ' - ' + data['Comprobante'].FechaEmision;
                        saveByteArray(nomArchivo, bydata);
                }
                //console.log(data);
            },
            complete: function(data){
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }
    //})

})(jQuery);