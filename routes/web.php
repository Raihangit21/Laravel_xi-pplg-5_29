<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\admin\DashboardController;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [DashbordController::class, 'index'])->name('admin.dashboard');
});








