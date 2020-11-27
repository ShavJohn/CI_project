<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function getUsers($page){
        $take = 3;
        $skip = $page * 3;
        $count = User::count();
        $users = User::skip($skip)->take($take)->get();
        return response()->json([
            'count' => $count,
            'users' => $users
        ]);
    }
}
