<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle($request, Closure $next, string $role)
    {
        if (!auth('sanctum')->check() || !auth('sanctum')->user()->hasRole($role)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return $next($request);
    }
}
