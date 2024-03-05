<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function __construct()
     {
         $this->middleware('auth');
     }
 
     public function create()
     { 
         return view('roles.create');
     }
 
   public function edit(Rol $rol){  
    
         return view('roles.edit', compact('rol'));
     }


    public function index()
    {
        $roles= Rol::all()
        ->where('active',true);   

        return view('roles.index', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $rol = new Rol();
        $rol->name=$request->name; 

        $rol->save();
        $notification='The role has been created successfully.';
        //return $request;
        return redirect('/roles')->with(compact('notification'));  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function show(Rol $rol)
    {
        return $rol;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rol $rol)
    {
        $rol->name=$request->name;   
       
        $rol->save();
        $notification='The role has been successfully updated.';      
        return redirect('/roles')->with(compact('notification'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rol  $rol
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rol $rol)
    {
        $rol->active=false;     
        $rol->save();
        $notification='The role has been successfully inactivated.';      
        return redirect('/roles')->with(compact('notification'));
    }
}
