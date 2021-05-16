<?php

namespace App\Modules\User\Repositories;

use App\Common\Exceptions\NoSetEloquentForRepositoryException;
use App\Common\Repositories\AbstractEloquentRepository;
use App\Models\User;
use App\Modules\User\DTOs\UserRegistrationDTO;

class UserRepository extends AbstractEloquentRepository implements UserRepositoryInterface
{
    protected $eloquent = User::class;

    /**
     * @param UserRegistrationDTO $userRegistrationDTO
     * @throws NoSetEloquentForRepositoryException
     */
    public function store(UserRegistrationDTO $userRegistrationDTO): void
    {
        $this->model()->create([
            'email' => $userRegistrationDTO->getEmail(),
            'name' => $userRegistrationDTO->getName(),
            'password' => $userRegistrationDTO->getPassword()
        ]);
    }
}
