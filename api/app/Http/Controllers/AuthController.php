<?php

namespace App\Http\Controllers;

use App\Common\Http\ApiResponse;
use App\Modules\User\DTOs\UserRegistrationDTO;
use App\Modules\User\Services\UserServiceInterface;
use App\Modules\User\Validations\UserValidation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * @var UserServiceInterface
     */
    private UserServiceInterface $userService;

    /**
     * AuthController constructor.
     * @param UserServiceInterface $userService
     */
    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        try {
            if ($token = JWTAuth::attempt($credentials)) {
                $data = [
                    'user' => JWTAuth::user(),
                    'token' => [
                        'access_token' => $token,
                        'token_type' => 'bearer'
                    ]
                ];

                return ApiResponse::success(trans('auth.login_success'), Response::HTTP_OK, $data);
            } else {

                return ApiResponse::failed(trans('auth.failed'), Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $JWTException) {

            return ApiResponse::failed(trans('auth.login_failed'), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function register(Request $request): JsonResponse
    {
        try {
            $request->validate(UserValidation::getRegistrationRules());

            $userDTO = new UserRegistrationDTO(
                $request->get('name'),
                $request->get('email'),
                Hash::make($request->get('password'))
            );

            $this->userService->store($userDTO);
            $credentials = $request->only('email', 'password');
            $token = JWTAuth::attempt($credentials);
            $data = [
                'user' => JWTAuth::user(),
                'token' => [
                    'access_token' => $token,
                    'token_type' => 'bearer'
                ]
            ];

            return ApiResponse::success(trans('auth.register_success'), Response::HTTP_OK, $data);

        } catch (ValidationException $exception) {

            return ApiResponse::failed($exception->validator->errors()->first(), Response::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $exception) {

            Log::error($exception->getMessage());

            return ApiResponse::failed(trans('auth.register_failed'), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function logout(): JsonResponse
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return ApiResponse::success(trans('auth.logout_success'), Response::HTTP_OK);
    }
}
