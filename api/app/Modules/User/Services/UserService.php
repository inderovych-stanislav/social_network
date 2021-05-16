<?php

namespace App\Modules\User\Services;

use App\Modules\User\DTOs\UserRegistrationDTO;
use App\Modules\User\Repositories\UserRepositoryInterface;

class UserService implements UserServiceInterface
{
    /**
     * @var UserRepositoryInterface
     */
    private UserRepositoryInterface $userRepository;

    /**
     * UserService constructor.
     * @param UserRepositoryInterface $userRepository
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param UserRegistrationDTO $userRegistrationDTO
     */
    public function store(UserRegistrationDTO $userRegistrationDTO): void
    {
        $this->userRepository->store($userRegistrationDTO);
    }
}
