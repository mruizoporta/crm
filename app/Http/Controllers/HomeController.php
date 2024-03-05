<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\vw_clientes;
use App\Models\vw_ordenes;
use App\Models\vw_facturas;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
         return view('home');
    }
}
