<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function index()
    {
        $data = User::all();

        return response()->json($data);
    }

    public function show($id)
    {
        $data = User::find($id);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = User::create([
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'email' => $request->email
        ]);

        return response()->json($data);
    }
}
