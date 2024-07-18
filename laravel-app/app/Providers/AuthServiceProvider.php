<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     * @return void
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Define gates for authorization
        Gate::define('upload-file', function ($user) {
            // Example: Allow users with role 'admin' or 'employee' to upload files
            return $user->role === 'admin' || $user->role === 'employee';
        });

        Gate::define('delete-file', function ($user) {
            // Example: Only allow users with role 'admin' to delete files
            return $user->role === 'admin';
        });

    }
}
