<?php

namespace App\Http\Controllers;

use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('layouts.user.user');
    }


    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }


    public function accessDenied()
    {
        return view('layouts.access_denied');
    }


    public function getUser(Request $request)
    {
        $user=User::
    }

}
