<?php

namespace App\Modules\User\Repositories;

use App\Modules\User\DTOs\UserRegistrationDTO;

interface UserRepositoryInterface
{
    public function store(UserRegistrationDTO $userRegistrationDTO): void;
}
