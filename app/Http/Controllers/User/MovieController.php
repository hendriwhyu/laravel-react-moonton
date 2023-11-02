<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function show(){
        return inertia('User/Dashboard/Movie/Show');
    }
}
