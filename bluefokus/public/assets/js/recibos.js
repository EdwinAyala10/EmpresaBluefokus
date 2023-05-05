
//(function($) {
    "use strict";
    
    var arrPDF = [];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
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

        let numeroDocumento = window.atob($('#documento').val());
	    let empresaId = 15;
	    let sector = 'PRI';

        fn_ListarContratos(numeroDocumento,empresaId,sector);

        $("#cboContratos").change(function(){
            $("#tbrecibos").empty();
            let id = (this).value;
            $('.dataTables-recibos').DataTable().destroy();  
            fn_CargarRecibosDT(id);

        })
    });
    
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
    
    function fn_ServiciosDT(numero) {
        debugger;
        
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
                            text = '<tr><td><div align="center" style="width:100%;text-align:center;font-weight:bold;line-height:250px;">NO SE PUDO OBTENER LA INFORMACION</div></td></tr>';
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
                    
                    return '<div class="alert alert-primary" role="alert">' + '<div style="background: #00CDE8;color:white;font-weight:700;font-size:15px;width:30px;height:30px;border-radius:250px;text-align:center;padding-top:5px;margin-bottom:10px;">' + (meta.row + 1) + '</div>' +
                           '<h6 class="alert-heading" style="font-weight:700">' + row["ID_CONTRATO"]+'-'+row["SERV_DIRECCION"] + '</h6><br/>'+
                           '<p> Fecha de Inicio: ' + row["VIGENCIA_INI"] + '<br/>'+
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

    function fn_ListarContratos(numeroDocumento,empresaId,sector){
        $.ajax({
            type: 'POST',
            url: 'controller/consulta.controller.php?page=iListarContratos',
            data: {'ndoc': numeroDocumento}, 
            dataType: 'json',                
            success: function (data) {
              data = JSON.parse(data);
                if (data['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                    let datacontratos = data['ContratoListar'];
                    let i = 0;
                    $("#cboContratos" + " option").remove();
                    if (datacontratos.length > 0) {                
                        for (i = 0; i < datacontratos.length; i++) {
                            if (i == 0) {
                                $("#cboContratos").append('<option value =' + datacontratos[i].ID_SERVICIO + ' selected>' + datacontratos[i].ID_CONTRATO + ' - ' + datacontratos[i].SERV_DIRECCION + '</option>');
                            }else{
                                $("#cboContratos").append('<option value =' + datacontratos[i].ID_SERVICIO + '>' + datacontratos[i].ID_CONTRATO + ' - ' + datacontratos[i].SERV_DIRECCION + '</option>');    
                            }
                            
                        }
                        $(".user-name").text("Hola, " + datacontratos[0].RAZON_SOCIAL);     
                } 
                }else{
                    window.location = "error";
                }           
            },
            complete: function(data){
                $("#cboContratos").change();
            },
            error: function (msg) {
                console.log(msg);
            }           
        })
    }

    function fn_CargarRecibosDT(numero)
    {
    $.fn.dataTable.Responsive.breakpoints = [
        { name: 'desktop', width: Infinity },
        { name: 'tablet',  width: 1024 },
        { name: 'fablet',  width: 768 },
        { name: 'phone',   width: 480 }
    ];

    $(".dataTables-recibos").DataTable({
        pageLength: 5,
        responsive: true,
        lengthChange: false,
        bFilter: false,
        order: [[ 2, "desc" ]],

        drawCallback: function( settings ) {
        //$("#selector thead").remove();
        }, 
        //columnDefs: [ { type: 'string', 'targets': [2] } ],
        columnDefs: [ { type: 'string', 'targets': [0,1,2,3], visible:true }],
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
                "sLoadingRecords": "<span style='color:#000'>Cargando...</span>",
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
            url: 'controller/consulta.controller.php?page=iListarComprobantes',
            data: {'nserv': numero},        
            dataSrc: function(json) {
                
                json = JSON.parse(json);
                console.log(json);
                arrPDF = json['ComprobanteContratoListar'];
                if (arrPDF == null)  {
                    $("#mdlCargando").modal('hide');
                    $("#tbrecibos").empty();
                    let text = '';
                    text = '<div align="center" style="width:100%;text-align:center;font-weight:bold;line-height:250px;">SIN RECIBOS PENDIENTES</div>';
                    $("#tbrecibos").append(text);
                }
                return arrPDF; 
                            
            }
        },
        columns: [
        {
            data: function(row, type, val, meta){
                let text = '';
                //text += '<a class"popoverServicio" href="javascript:void(0)" onclick="fn_DescargarPDF('+row["ComprobanteId"]+')" style="cursor:pointer;" title="Descargar PDF">';
				text += '<a class"popoverServicio" href="controller/verpdf.php?periodo='+row.Periodo+'&file='+row.CargoPDF+'" style="cursor:pointer;" title="Descargar PDF" target="_blank">';
                text += '<i class="fa fa-download" style="font-size:20px;padding:10px;border:1px solid yellow;border-radius:90px;color:yellow"></i>&nbsp&nbsp<span style="font-weight:bold;color:#000">'+ meses[parseInt(row['MesPeriodo']) - 1].toUpperCase() + ' ' + row.FechaEmision.slice(-4) + '</span>';
                //text += '<i class="fa fa-download" style="font-size:20px;padding:10px;border:1px solid yellow;border-radius:90px;color:yellow"></i>&nbsp&nbsp<span style="font-weight:bold;color:#000">'+ meses[parseInt(row['MesPeriodo']) - 1].toUpperCase() + '</span>';
                text += '</a>';
                return text;
            },
            bSortable: false,
            orderable: false,
            width: '40%'
        },
        /*{
            //"data": "Numero", width: 200, bSortable: false, orderable: false
            data: function(row, type, val, meta){
                var split = row["FechaVencimiento"].split("/");
                var dateStr = split[1]+"/"+split[0]+"/"+split[2]; 
                //return ((new Date(dateStr).getTime()/1000).toString() + row['MesPeriodo']); // En caso de que 2 recibos tengan la misma fecha de venc, ademas toma el mes
                return new Date(dateStr).getTime().toString();
            },
            visible: false
        },*/
        {
        data: function(row, type, val, meta){
            if (row["EstadoDescripcion"] == 'PAGADO') {
            //return '<i class="far fa-check-circle"></i>&nbsp'+ row["EstadoDescripcion"];
            return '<span style="color:#e96200">' + row["EstadoDescripcion"].toUpperCase() + '</span>';
            }else{
            //return '<i class="fas fa-exclamation-circle"></i>&nbsp'+ row["EstadoDescripcion"];
            return '<span style="color:#e96200">' + row["EstadoDescripcion"].toUpperCase() + '</span>';
            }
            
        }, 
        width: '20%', bSortable: false, orderable: false
        },
        {
        data: function(row, type, val, meta){
            return '<span style="color:#000">Vencimiento: ' + row["FechaVencimiento"] + '</span>';
        }, 
        width: '20%',
        type: 'date'
        },
        {
            data: function(row, type, val, meta){
            //return '<strong>' + '$ ' + row["Total"] + '</strong>';
            return '<span style="color:#000"><strong>' + (row["TipoMoneda"] == "SOLES" ? "S/ " : "$ ") + row["Total"] + '</strong></span>';
            }, 
            width: '20%', bSortable: false, orderable: false
        }]
    });
}

function fn_DescargarPDF(comprobante) {
  
    /*var result = arrPDF.filter(function(hero) {
        return hero.ComprobanteId == comprobante
    });*/
	$("a").css("cursor","wait");
	document.body.style.cursor='wait';
    $.ajax({
        type: 'POST',
        //url: 'http://app.optical.pe/ECOM/api/ComprobanteApi/GenerarComprobanteDigital',
		url: 'controller/consulta.controller.php?page=iMostrarPdf',
        data: {'comprobanteId': comprobante}, 
        dataType: 'json',                
        success: function (data) {
            /*$("a").css("cursor","pointer");
			document.body.style.cursor='default';
			if (data['BEEstadoSolicitud'].EstaCorrecto == true) {
                var result = data['ByteData'];
				saveByteArray(result);
            }*/
            debugger;
            console.log(data);
            alert("Correcto");
        },
        error: function (msg) {
            console.log(msg);
        }           
    });
}

function saveByteArray(byte) {
    var convertbyte = base64ToArrayBuffer(byte);
    var blob = new Blob([convertbyte], {type: "application/pdf"});
    var link = document.createElement('a');
    //link.href = window.URL.createObjectURL(blob);
    //var fileName = reportName;
    //link.download = fileName;
    //link.click();
    var fileURL =  window.URL.createObjectURL(blob);
    //window.location.href = fileURL
    window.open(fileURL, "_blank");
};

function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
}
  

//})(jQuery);