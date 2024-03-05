<?php

use App\Http\Controllers\MarcaController;
use Illuminate\Support\Facades\Auth;
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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Rutas Roles
Route::get('/roles', [App\Http\Controllers\RolController::class, 'index']);
Route::get('/roles/create', [App\Http\Controllers\RolController::class, 'create']);
Route::get('/roles/{rol}/edit', [App\Http\Controllers\RolController::class, 'edit']);
Route::post('/roles', [App\Http\Controllers\RolController::class, 'store']);
Route::put('/roles/{rol}', [App\Http\Controllers\RolController::class, 'update']);
Route::post('/roles/{rol}/inactivate', [App\Http\Controllers\RolController::class, 'destroy']);

//Rutas Usuarios
Route::get('/users', [App\Http\Controllers\UserController::class, 'index']);
Route::get('/users/create', [App\Http\Controllers\UserController::class, 'create']);
Route::get('/users/{user}/edit', [App\Http\Controllers\UserController::class, 'edit']);
Route::post('/users', [App\Http\Controllers\UserController::class, 'store']);
Route::put('/users/{user}', [App\Http\Controllers\UserController::class, 'update']);
Route::post('/users/{user}/inactivate', [App\Http\Controllers\UserController::class, 'destroy']);

