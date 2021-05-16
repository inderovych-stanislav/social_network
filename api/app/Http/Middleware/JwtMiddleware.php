<?php

namespace App\Http\Middleware;

use App\Common\Http\ApiResponse;
use Closure;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return JsonResponse|mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            JWTAuth::parseToken()->authenticate();

        } catch (TokenExpiredException $tokenExpiredException) {
            try {
                $refreshed = JWTAuth::refresh();
                JWTAuth::setToken($refreshed)->toUser();
                $request->headers->set('Authorization', 'Bearer ' . $refreshed);
            } catch (JWTException $JWTException) {

                return ApiResponse::failed(trans('auth.logged_out'), Response::HTTP_UNAUTHORIZED);
            }
        } catch (Exception $e) {

            return ApiResponse::failed(trans('auth.logged_out'), Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
