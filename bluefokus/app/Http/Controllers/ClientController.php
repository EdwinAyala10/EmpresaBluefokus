<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    function create(Request $request){ 
        $req=$request->input();

        $rules=[
            "nombre"=>  ['required'],
            "num_doc"=>  ['required'],
            "tipo_doc"=> 'required'
        ];
        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()){
            return response()->json( ["response"=>'warning', "comment"=>'ingrese todo los campos', "data"=>$validator->errors(),"message"=>'warning','alert'=>0], 200);
        }else{
            $data['nombre' ] =  $req["nombre"];
            $data['num_doc' ] =   $req["num_doc"];
            $data['tipo_doc' ] =   $req["tipo_doc"];
            $data['id_user' ] = 0;
            $data['estado' ] = 1;
            $result=DB::table('client')->insertGetId($data);
            if ($result){
                $cli['nombre_titular' ] =  $req["nombre_titular"];
                $cli['tipo_doc' ] =   $req["tipo_doc_man"];
                $cli['doc_titular' ] = $req["doc_titular"];
                $cli['id_client' ] = $result;
                if ($req["tipo_doc"] =2){
                    $rsClientMan=DB::table('client_mancomunada')->insertGetId($cli);
                }
                return response()->json(["response"=>'success', 'comment'=>'Se registro correctamente'], 200);
            }else{
                return response()->json(["response"=>'warning', 'comment'=>'Succesio un problema'], 200);
            }
            
        }

        
    }

    function edit(Request $request){ 
        $req=$request->input();

        $rules=[
            "nombre"=>  ['required'],
            "num_doc"=>  ['required'],
            "tipo_doc"=> 'required'
        ];
        $validator = Validator::make($request->all(),$rules);
        if ($validator->fails()){
            return response()->json( ["response"=>'warning', "comment"=>'ingrese todo los campos', "data"=>$validator->errors(),"message"=>'warning','alert'=>0], 200);
        }else{
            $data['nombre' ] =  $req["nombre"];
            $data['num_doc' ] =   $req["num_doc"];
            $data['tipo_doc' ] =   $req["tipo_doc"];
            $rs = DB::table('client')->where('id','=', $req["id"])->update($data);
            if ($rs){
                return response()->json(["response"=>'success', 'comment'=>'Se registro correctamente'], 200);
            }else{
                return response()->json(["response"=>'warning', 'comment'=>'Succesio un problema'], 200);
            }
        }
    }
    function listarCliente(Request $request){
        $req=$request->input();
        $data = DB::table('client')
        ->select("*")
        ->where('estado', '1')
        ->get();
        $datos = '';
        $count = 0;
        foreach ( $data as $val){
            $count++;
            $datos.= '<tr>
                <td>'.$count.'</td>
                <td>'.trim($val->nombre).'</td>
                <td>'. trim($val->num_doc).'</td>
                <td>'.trim($val->tipo_doc).'</td>
                <td> 
                <button type="button" data-id="'.$val->id.'" data-toggle="modal" data-target=".bd-example-modal-lg" class=" btn-editar btn btn-sm btn-primary fw-bolder me-4 btn-success-degradates-m">Editar</button>
                <button type="button" data-id="'.$val->id.'" class="btn-eliminar btn btn-sm btn-danger fw-bolder me-4 btn-danger-degradates-m">Eliminar</button> </td>
            </tr>';
        }
        return response()->json(["response"=>'success', 'data'=>$datos, "comment"=>'No hay datos'], 200);
    }
    function delete(Request $request){
        $req=$request->input();
        $data['estado' ] =  0;
        $rs = DB::table('client')->where('id','=', $req["id"])->update($data);
        if ($rs){
            return response()->json(["response"=>'success', 'comment'=>'Se ha eliminado correctamente'], 200);
        }else{
            return response()->json(["response"=>'warning', 'comment'=>'Succesio un problema'], 200);
        }
    }
    
}
