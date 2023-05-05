<?php

use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('cliente.cliente');
})->name('home');

Route::get('/cliente/lista', function () {
    return view('cliente.listado');
})->name('lista');

Route::post('/cliente/create', [ClientController::class, 'create']);
Route::post('/cliente/listar', [ClientController::class, 'listarCliente']);
Route::post('/cliente/edit', [ClientController::class, 'edit']);
Route::post('/cliente/delete', [ClientController::class, 'delete']);

Route::get('/greeting', function () {
    //return 'Hello World';
    $hash='$2y$10$ESV7OP/uWzaTo9xmjv1PleT/qyHLv4KDVDpQspdCO/PZwAEGrj9nW';
    if (password_verify('CARLOS', $hash)){
        echo '¡La contraseña es válida!';
    } else {
        echo 'La contraseña no es válida.';
    }
    echo '<br>';//
    $hash=password_hash("1@Dev+", PASSWORD_DEFAULT);
    echo $hash;
    echo '<br>';//
    $email ='ediis@gmail.com';
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "{$email}: A valid email"."<br>";
    }
    else {
        echo "{$email}: Not a valid email"."<br>";
    }
});
