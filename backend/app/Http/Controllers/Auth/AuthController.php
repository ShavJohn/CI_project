<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use App\Http\Requests\Register;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Cookie;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class AuthController extends Controller
{
    public function register(Register $request)
    {
        User::query()->create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request -> get('password')),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'You are successfully registered'
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $user = User::where('email', $request->email)->first();

        if (Hash::check($request->password, $user->password)) {

            $token =  $user->createToken('access_token')->accessToken;

            return response()->json([
                    'logged_in_user' => $user,
                    'token' => $token,
                ], 200)
                ->cookie($token);
        } else {
            return response()->json(
                ['error' => 'invalid-credentials'], 422);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $cookie = Cookie::forget('_token');
        return response()->json([
            'message' => 'successful-logout'
        ])->withCookie($cookie);
    }

    public function roleCheker()
    {
        return response()->json(Auth::user());
    }

}
