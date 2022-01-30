<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\MyFirstController;

use App\Mail\WelcomeMail;
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
    return view('welcome');
});

//Route::get('/hello', function (){
//    return 'hello';
//});

Route::get('/test', function (){
    return 'Hello Learning Laravel from test';
});

//Route::get('/myroute', function (){
//    return 'hello from myroute';
//});

//Route::get('/myroute', function (){
//    $startingYear = '2020';
//    return view('subviews.myview', compact('startingYear'));
//});

//Route::get('/helloView', function (){
//    return view('subviews.hello');
//});

//Route::get('/helloView', function (){
//    $variable = 'hello from Routes Again';
////    return view('subviews.hello', ['someData' => $variable]);
//    return view('subviews.hello', compact('variable'));
//});

//Route::get('/helloView', 'App\Http\Controllers\HelloController@index');

Route::get('/helloView',  [HelloController::class, 'index']);
Route::get('/myroute',  [MyFirstController::class, 'index']);

Route::get('/about', 'App\Http\Controllers\HelloController@about');
//Route::get('/services', 'App\Http\Controllers\HelloController@services');

//Route::get('/services', 'App\Http\Controllers\ServiceController@index');
//Route::post('/services', 'App\Http\Controllers\ServiceController@index');

//Route::get('/service', 'App\Http\Controllers\ServiceController@index');
//Route::post('/service', 'App\Http\Controllers\ServiceController@store');

Route::get('/service', 'App\Http\Controllers\TaskController@index');
Route::post('/service', 'App\Http\Controllers\TaskController@store');

Route::get('/contact', 'App\Http\Controllers\MyFirstController@contact');

Route::get('/customers', 'App\Http\Controllers\CustomerController@index');
Route::get('/customers/create', 'App\Http\Controllers\CustomerController@create');
Route::post('/customers', 'App\Http\Controllers\CustomerController@store');
Route::get('/customers/{customer}', 'App\Http\Controllers\CustomerController@show');
Route::get('/customers/{customer}/edit', 'App\Http\Controllers\CustomerController@edit');
Route::patch('/customers/{customer}', 'App\Http\Controllers\CustomerController@update');
Route::delete('/customers/{customer}', 'App\Http\Controllers\CustomerController@destroy');

//Route::view('/about', 'about');
//Route::view('/services', 'services');



Route::get('/email', function () {
    Mail::to('from@example.com')->send(new WelcomeMail());

    return new WelcomeMail();
});





