<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <title>@yield('title')</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="">
        <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/themify-icons.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/metisMenu.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/slicknav.min.css')}}">
        <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css">
        <link rel="stylesheet" href="{{asset('assets/css/typography.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/default-css.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/styles.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/responsive.css')}}">
        <link rel="stylesheet" href="{{asset('assets/js/dist/min/dropzone.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/css/fontMadeTommySoft/fontMadeTommySoft.css')}}">
        <link href="https://fonts.googleapis.com/css?family=Exo:300,400,500,600,700,800" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('assets/css/footer.css')}}">
        <link href="{{asset('assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/stylecr.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/footable/css/footable.core.css')}}" rel="stylesheet" type="text/css" />


         @stack('styles')

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
            .cla-titular{
                display: none;
            }
            .p-t-10{
                padding-top: 10px; 
            }
        </style>
    </head>
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            @if (Route::has('login'))
                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    @auth
                        <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">

                <div class="px-20 d-flex">
                    <div class="col-md-6 text-center "> <a class="fw-bolder text-orange text-decoration-underline "  href="{{ route('home') }}">crear</a></div>
                    <div class="col-md-6 text-center "> <a class="fw-bolder text-orange text-decoration-underline "  href="{{ route('lista') }}">listado</a></div>
                </div>
                <form action="api/showmenu" method="POST" id="form-name">

                </form>
                
                <div class="d-flex flex-column flex-lg-row-fluid p-10">
                       @yield('content')
                </div>

            </div>
        </div>

        <script src="{{asset('assets/js/vendor/jquery-2.2.4.min.js')}}"></script>
        <script src="{{asset('assets/js/popper.min.js')}}"></script>
        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
        <script src="{{asset('assets/js/metisMenu.min.js')}}"></script>
        <!--script src="{{asset('assets/js/jquery.slimscroll.min.js')}}"></script-->
        <script src="{{asset('assets/js/jquery.slicknav.min.js')}}"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.3.5/dist/sweetalert2.all.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
        <script src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap.min.js"></script>
        <script src="{{asset('assets/js/plugins.js')}}"></script>
        <!--script src="{{asset('assets/js/servicios.js')}}"></script-->
        <script src="{{asset('assets/js/plugins.bundle.js')}}"></script>
        <script src="{{asset('assets/js/scripts.bundle.js')}}"></script>
        <script src="{{asset('assets/js/validation.js')}}"></script>
        <script src="{{asset('assets/footable/js/footable.all.min.js')}}"></script>
        @stack('scripts')
        <script>
            const Toast = Swal.mixin({
                   toast: true,
                   position: 'top-end',
                   showConfirmButton: false,
                   timer: 3000,
                   timerProgressBar: true,
                   didOpen: (toast) => {
                             toast.addEventListener('mouseenter', Swal.stopTimer)
                             toast.addEventListener('mouseleave', Swal.resumeTimer)
                   }
              });
       </script>
        <script>
            $(document).ready(function(){
                console.log("edwin mas ");
                listarCLiente();
            });

            $(document).on("click", "#save-cliente", function(){
                $.ajax({
                    url: "cliente/create",
                    type: 'post',
                    data: {
                        "_token": $("input[name='_token']").val(),
                        'nombre': $("#nombre").val(),
                        'num_doc':  $("#num_doc").val(),
                        'tipo_doc':  $("#tipo_doc").val(),
                        'nombre_titular':  $("#nombre_titular").val(),
                        'tipo_doc_man':  $("#tipo_doc_man").val(),
                        'doc_titular':  $("#doc_titular").val(),
                    },
                    beforeSenf: function(data){
                    },
                    success: function(datas){
                        Toast.fire({
                            icon: datas.response,
                            title: datas.comment
                        });
                        if (datas.response=="success"){
                            $("#form-create")[0].reset();
                        }

                        
                    }
                });
            });

            $(document).on("change", "#tipo_doc", function(){
                var $this = $(this).val();
                $(".cla-titular").show();
                if ($this=="2"){
                    $(".cla-titular").hide();
                }
            });
            function listarCLiente(){
                $.ajax({
                    url: '{{asset('cliente/listar')}}',
                    type: 'post',
                    data: {
                        "_token": $("input[name='_token']").val()
                    },
                    beforeSenf: function(data){
                    },
                    success: function(datas){
                        console.log(datas);
                        $("#table-cliente").html(datas.data)
                    }
                });
            }

            $(document).on("click", ".btn-editar", function(){
                var $this = $(this).data("id");
                var nom =  $(this).parent().parent().children().eq(1).text();
                var doc =  $(this).parent().parent().children().eq(2).text();
                var tipo_doc_ed =  $(this).parent().parent().children().eq(3).text();
                console.log(nom);
                console.log(doc);
                console.log(tipo_doc_ed);
                $("#id").val($this);
                $("#nombre").val(nom);
                $("#num_doc").val(doc);
                $("#tipo_doc_ed").val(tipo_doc_ed);
                
            });

            $(document).on("click", "#editar-cliente", function(){
                $.ajax({
                    url: '{{asset('cliente/edit')}}',
                    type: 'post',
                    data: {
                        "_token": $("input[name='_token']").val(),
                        'nombre': $("#nombre").val(),
                        'num_doc':  $("#num_doc").val(),
                        'tipo_doc':  $("#tipo_doc_ed").val(),
                        'id':  $("#id").val(),
                    },
                    beforeSenf: function(data){
                    },
                    success: function(datas){
                        Toast.fire({
                            icon: datas.response,
                            title: datas.comment
                        })
                        if (datas.response=="success"){
                            $("#form-editar")[0].reset();
                            listarCLiente();
                        }
                    }
                });
            });

            $(document).on("click", ".btn-eliminar", function(){
                var id = $(this).data("id");
                var $this =  $(this);
                $.ajax({
                    url: '{{asset('cliente/delete')}}',
                    type: 'post',
                    data: {
                        "_token": $("input[name='_token']").val(),
                        'id': id
                    },
                    beforeSenf: function(data){
                    },
                    success: function(datas){
                        Toast.fire({
                            icon: datas.response,
                            title: datas.comment
                        })
                        if(datas.response=="success"){
                            $this.parent().parent().remove();
                        }
                    }
                });
            });

            

           

            
        </script>

    </body>
</html>
