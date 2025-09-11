<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    // public function handle($request, Closure $next, string $role)
    // {
    //     if (!auth('sanctum')->check() || !auth('sanctum')->user()->hasRole($role)) {
    //         return response()->json(['message' => 'Forbidden'], 403);
    //     }

    //     return $next($request);
    // }

    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check() || !auth()->user()->isAdmin()) {
            return response()->json([
                'message' => 'Unauthorized. Admin access required.',
            ], 403);
        }

        return $next($request);
    }

}
