<?php

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/questionnaires/create', 'App\Http\Controllers\QuestionnaireController@create');
Route::post('/questionnaires', 'App\Http\Controllers\QuestionnaireController@store');
Route::get('/questionnaires/{questionnaire}', 'App\Http\Controllers\QuestionnaireController@show');

Route::get('/questionnaires/{questionnaire}/questions/create', 'App\Http\Controllers\QuestionController@create');
Route::post('/questionnaires/{questionnaire}/questions', 'App\Http\Controllers\QuestionController@store');

Route::get('/surveys/{questionnaire}-{slug}', 'App\Http\Controllers\SurveyController@show');
Route::post('/surveys/{questionnaire}-{slug}', 'App\Http\Controllers\SurveyController@store');

Route::delete('/questionnaires/{questionnaire}/questions/{question}', 'App\Http\Controllers\QuestionController@destroy');
