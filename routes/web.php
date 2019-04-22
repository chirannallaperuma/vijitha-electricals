<?php

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

use \Illuminate\Support\Facades\Route;

Route::get('/logout', array('uses' => 'UserController@logout'));

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/user', 'UserController@user');

Route::get('/user/list', 'UserController@list');

Route::group(['middleware' => ['auth'], 'prefix' => 'product', 'as' => 'product'], function () {
    Route::get('/index', ['as' => 'index', 'uses' => 'ProductController@index', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::post('/category/save', ['as' => 'category', 'uses' => 'ProductController@categorySave', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::post('/brand/save', ['as' => 'brand', 'uses' => 'ProductController@brandSave', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::post('/save', ['as' => 'save', 'uses' => 'ProductController@saveProduct', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::get('/category/list', ['as' => 'category/list', 'uses' => 'ProductController@getCategoryList', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::get('/brand/list', ['as' => 'brand/list', 'uses' => 'ProductController@getBrandList', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::get('/taxProfile', ['as' => 'taxProfile', 'uses' => 'ProductController@getTaxProfiles', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::get('/list', ['as' => 'list', 'uses' => 'ProductController@productList', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::any('/search', ['as' => 'search', 'uses' => 'ProductController@search', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);
    Route::post('/update', ['as' => 'update', 'uses' => 'ProductController@updateProduct', 'middleware' => 'roles', 'roles' => ['admin', 'manager', 'user']]);

});