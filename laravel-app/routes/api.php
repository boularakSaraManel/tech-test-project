<?php
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\FolderController;
use App\Http\Controllers\Admin\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//authentication routes 
Route::post('/register', [RegisterController::class, 'register']); //for admin
Route::post('/login', [AuthController::class, 'login']); //for both admin and employees

// Protected Routes for Admin
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LogoutController::class, 'logout']); //for both admin and employees
 
    //if employee is connected he/she'll get an "unauthorized access error"
    Route::middleware('admin')->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::post('/users', [UserController::class, 'store']); //admin adds employee
        Route::get('/users/{user}', [UserController::class, 'show']);
        Route::put('/users/{user}', [UserController::class, 'update']);
        Route::delete('/users/{user}', [UserController::class, 'destroy']);
    });
});

/* Route::post('/upload', function (Request $request) {
    if (Gate::allows('upload-file')) {
        // Authorized to upload file
        // Your upload logic here
    } else {
        // Not authorized
        abort(403, 'Unauthorized action.');
    }
})->middleware('auth:sanctum');
 */


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/folders', [FolderController::class, 'index']);
    Route::post('/folders', [FolderController::class, 'store']);
    Route::delete('/folders/{folder}', [FolderController::class, 'destroy']);

    Route::get('/files', [FileController::class, 'index']);
    Route::post('/files', [FileController::class, 'store']);
    Route::delete('/files/{file}', [FileController::class, 'destroy']);
});

