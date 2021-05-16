<?php

namespace App\Common\Http;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiResponse
{
    /**
     * @param string $message
     * @param int $status
     * @param array $data
     * @return JsonResponse
     */
    public static function failed(string $message, int $status, array $data = []): JsonResponse
    {
        return Response::json(['success' => false, 'message' => $message, 'data' => $data], $status);
    }

    /**
     * @param string $message
     * @param int $status
     * @param array $data
     * @return JsonResponse
     */
    public static function success(string $message, int $status, array $data = []): JsonResponse
    {
        return Response::json(['success' => true, 'message' => $message, 'data' => $data], $status);
    }

    /**
     * @param string $message
     * @param int $status
     * @param array $data
     * @return JsonResponse
     */
    public static function successWithToken(string $message, int $status, array $data = []): JsonResponse
    {
        $userAndToken = [
            'user' => JWTAuth::user(),
            'token' => [
                'access_token' => JWTAuth::getToken()->get(),
                'token_type' => 'bearer'
            ]
        ];

        return Response::json(
            [
                'success' => true,
                'message' => $message,
                'data' => array_merge($data, $userAndToken)
            ],
            $status
        );
    }
}
