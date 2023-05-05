
//(function($) {
    "use strict";
    /*================================
    Preloader
    ==================================*/

    var code;
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
        $("#captchaTextBox").val('');
        $("#documento").val('');
	    $("#documento").focus();
	    createCaptcha();
    })

    $("#form_submit").click(function(e){
        e.preventDefault();
        if (validateCaptcha()) {
    		fn_Contratos();
    	}
	})

    function cambiaMayuscula(elemento){
        elemento.value = elemento.value.toUpperCase();
    }

    function createCaptcha() {
        var charsArray =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lengthOtp = 6;
        var captcha = [];
        for (var i = 0; i < lengthOtp; i++) {

          var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
          if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
          else i--;
        }
        var canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 100;
        canv.height = 50;
        var ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        ctx.strokeText(captcha.join(""), 0, 30);
        //storing captcha so that can validate you can save it somewhere else according to your specific requirements
        code = captcha.join("");
        //document.getElementById('lblCaptcha').innerHTML = code; 
        $(".lblCaptcha").html(code);
        //document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
      }
      function validateCaptcha() {
        let codigocaptcha = $("#captchaTextBox").val();	
        if (codigocaptcha.toLowerCase()  == code.toLowerCase()) {
          return true; 
        }else{
          $("#captchaTextBox").val('');
          fnAlertas('error', 'Alerta', 'Código Invalido');
          createCaptcha();
          return false
        }
      }
      
    
    function fn_Contratos(){
        var numeroDocumento = $("#documento").val();
    
        $.ajax({
            type: 'POST',
            url: 'controller/consulta.controller.php?page=iListarContratos',
            data: {'ndoc': numeroDocumento}, 
            dataType: 'json',                
            success: function (data) {
                debugger;
                data = JSON.parse(data);
                if (data['EstadoSolicitud'].MensajeRespuesta == 'Listado Correctamente') {
                    numeroDocumento = $("#documento").val();
                let empresaId = 15;
                let sector = 'PRI';
    
                let emp = window.btoa("EmpresaId");
                let sec = window.btoa("Sector");
                let num = window.btoa("NumeroDocumento");
                let url = "servicios.php?"+ emp +"="+ empresaId +"&" + sec + "="+ sector +"&" + num + "="+window.btoa(numeroDocumento);
                    
                window.location = url;
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

    function fnAlertas(icono, titulo, mensaje) {
        Swal.fire({
          icon: icono,
          title: titulo,
          text: mensaje
        })
    }
    //})

//})(jQuery);