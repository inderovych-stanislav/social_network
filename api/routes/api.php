<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
    Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);

    Route::group(['middleware' => 'auth.jwt'], function () {
        Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    });
});
