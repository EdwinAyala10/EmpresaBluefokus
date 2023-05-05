@extends('layouts.plantilla')
@section('title', 'Login')
@section('content')
<form name="form-create" id="form-create" >
    @csrf
        <div class="row row justify-content-md-center"  > 
            <div class="col-lg-8" >
                <div class="text-center mb-5">
                    <p class="text-dark mb-3 mt-3 text-big">
                        <b class=" fw-800 " > Registrar  </b>
                        <span class="">Cliente</span></p>
                </div>
                <div class="d-flex justify-content-center align-items-center my-5">
                    <div style="height: 10px; width: 10px;" class="bg-orange rounded-circle"></div>
                    <div style="height: 10px; width: 10px;" class="bg-orange rounded-circle mx-3"></div>
                    <div style="height: 10px; width: 10px;" class="bg-orange rounded-circle"></div>
                </div>
                
                <div class="row">
                    <div class="col-lg-6">
                        <div class="fv-row mb-5">
                            <label class="form-label fw-bolder text-gray-900 fs-6 ">Ingrese cliente</label>
                            <input class="form-control form-control-solid" placeholder="Ingrese cliente" type="text" placeholder="" id="nombre" name="nombre" autocomplete="off" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="fv-row mb-5">
                            <label class="form-label fw-bolder text-gray-900 fs-6 ">Seleccione tipo doc</label>
                            <select name="tipo_doc" id="tipo_doc" class="form-control form-control-solid">
                                <option value="">seleccionar una opcion</option>
                                <option value="1">Natural</option>
                                <option value="2">Juridica</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="col-lg-6">
                        <div class="fv-row mb-5">
                            <label class="form-label fw-bolder text-gray-900 fs-6 ">Ingrese su documento de identidad</label>
                            <input class="form-control form-control-solid" placeholder="Ingrese su documento de identidad" type="number" placeholder="" id="num_doc" name="num_doc" autocomplete="off" />
                        </div>
                    </div>

                    <div class="row p-3 cla-titular" style="border: 1px solid #d4cfcf;">
                        <div class="col-lg-6 cla-titular ">
                            <div class="fv-row mb-5">
                                <label class="form-label fw-bolder text-gray-900 fs-6 ">Ingrese cliente titular</label>
                                <input class="form-control form-control-solid" placeholder="Ingrese nombre titular" type="text" placeholder="" id="nombre_titular" name="nombre_titular" autocomplete="off" />
                            </div>
                        </div>
                        <div class="col-lg-6  cla-titular">
                            <div class="fv-row mb-5">
                                <label class="form-label fw-bolder text-gray-900 fs-6 ">Seleccione tipo doc cliente titular</label>
                                <select name="tipo_doc_man" id="tipo_doc_man" class="form-control form-control-solid">
                                    <option value="">seleccionar una opcion</option>
                                    <option value="3">DNI</option>
                                    <option value="4">CE</option>
                                    <option value="5">RUC</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6  cla-titular">
                            <div class="fv-row mb-5">
                                <label class="form-label fw-bolder text-gray-900 fs-6 ">Ingrese su documento de identidad titular</label>
                                <input class="form-control form-control-solid" placeholder="Ingrese su documento de identidad titular" type="number" placeholder="" id="doc_titular" name="doc_titular" autocomplete="off" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="col-lg-12 p-t-10">
                        <button type="button" class="btn btn-lg btn-primary fw-bolder me-4 btn-success-degradate w-100 " id="save-cliente" >Guardar</button>
                    </div>
                </div>
            </div>
        </div>
</form>
@endsection()