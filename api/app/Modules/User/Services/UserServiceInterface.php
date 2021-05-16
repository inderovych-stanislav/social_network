<?php

namespace App\Modules\User\Services;

use App\Modules\User\DTOs\UserRegistrationDTO;

interface UserServiceInterface
{
    public function store(UserRegistrationDTO $userRegistrationDTO): void;
}
