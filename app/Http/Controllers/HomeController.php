<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return Inertia::render('Home', ["is_logged_in" => Auth::check()]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function faq()
    {
        return Inertia::render('FAQPage');
    }

    public function comingSoon() {
        return Inertia::render('ComingSoon');
    }

}
