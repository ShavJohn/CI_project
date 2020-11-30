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

Route::post('/register', 'Auth\AuthController@register');

Route::post('/login', 'Auth\AuthController@login');


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/logout', 'Auth\AuthController@logout');
    Route::get('/role', 'Auth\AuthController@roleCheker');


    Route::group(['middleware' => 'admin'], function () {
        Route::get('/users/{page}', 'Admin\UsersController@index');
        Route::get('/user/{user}', 'Admin\UsersController@show');
        Route::post('/users', 'Admin\UsersController@store');
        Route::put('/user/{user}', 'Admin\UsersController@update');
        Route::delete('/user/{user}', 'Admin\UsersController@destroy' );
    });
});


