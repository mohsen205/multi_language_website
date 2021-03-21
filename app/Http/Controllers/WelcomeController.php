<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
class WelcomeController extends Controller
{
    public function index($lang = null){
        App::setlocale($lang);
        return view('welcome');
    }
   
}
