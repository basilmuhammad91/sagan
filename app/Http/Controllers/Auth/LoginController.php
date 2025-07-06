<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/dashboard'; // or wherever you want to redirect

    public function showLoginForm()
    {
        logger("showLoginForm..");
        return Inertia::render('Auth/Login');
    }

    protected function authenticated(Request $request, $user)
    {
        // For Inertia, we need to return a proper Inertia response
        if ($request->wantsJson()) {
            return response()->json(['redirect' => '/']);
        }

        return Inertia::location('/');
    }

     protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        if ($response = $this->authenticated($request, $this->guard()->user())) {
            return $response;
        }

        // For Inertia requests, return a location response
        return Inertia::location($this->redirectPath());
    }

    protected function redirectPath()
    {
        return view('welcome');
    }
}
