<?php

namespace App\Providers;

use App\Modules\User\Repositories\UserRepository;
use App\Modules\User\Repositories\UserRepositoryInterface;
use App\Modules\User\Services\UserService;
use App\Modules\User\Services\UserServiceInterface;
use Illuminate\Container\Container;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserServiceInterface::class, function (Container $app) {
            return new UserService(
                $app->make(UserRepositoryInterface::class)
            );
        });

        $this->app->bind(UserRepositoryInterface::class, function () {
            return new UserRepository();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
