<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\Admin\PropertyController as AdminPropertyController;
use App\Http\Controllers\Admin\BookingController as AdminBookingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/properties/{property}', [PropertyController::class, 'show']);
Route::post('/properties/{property}/check-availability', [PropertyController::class, 'checkAvailability']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/bookings', [BookingController::class, 'index']);
    Route::get('/bookings/{booking}', [BookingController::class, 'show']);
    Route::post('/properties/{property}/bookings', [BookingController::class, 'store']);
    Route::post('/bookings/{booking}/cancel', [BookingController::class, 'cancel']);

    Route::middleware('role:admin')->prefix('admin')->group(function () {
        Route::apiResource('properties', AdminPropertyController::class);
        Route::post('/properties/{property}/availability', [AdminPropertyController::class, 'manageAvailability']);
        Route::get('/properties/{property}/availability', [AdminPropertyController::class, 'getAvailability']);

        Route::get('/bookings', [AdminBookingController::class, 'index']);
        Route::get('/bookings/pending', [AdminBookingController::class, 'pending']);
        Route::get('/bookings/{booking}', [AdminBookingController::class, 'show']);
        Route::get('/properties/{property}/bookings', [AdminBookingController::class, 'propertyBookings']);
        Route::post('/bookings/{booking}/confirm', [BookingController::class, 'confirm']);
        Route::post('/bookings/{booking}/reject', [BookingController::class, 'reject']);
    });
});
