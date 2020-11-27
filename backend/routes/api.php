<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/logout', 'Auth\AuthController@logout');
    Route::get('/role-check', 'Auth\AuthController@roleCheker');

});
Route::get('/get-users/{page}', 'UsersController@getUsers');
Route::post('/login', 'Auth\AuthController@login');
Route::post('/register', 'Auth\AuthController@register');