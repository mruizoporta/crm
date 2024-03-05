<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\LoginFormRequest;
use App\Models\Rol;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create()
    {
        $roles = Rol::all()
        ->where('active',true);  

        return view('users.create', compact('roles'));
    }

  public function edit(User $user){  
    $roles = Rol::all()
    ->where('active',true);  

     return view('users.edit', compact('user','roles'));
    }

    public function index()
    {
        $users= User::with('rol')->get()
        ->where('active',true);   

        return view('users.index', compact('users'));        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            DB::beginTransaction();
            $user = new User();
            $user->name = $request->nombre;
            $user->email = $request->email;          
            $user->password = Hash::make($request->password);
            $user->rol_id = $request->rol_id;        
            $user->save();
          
            DB::commit();  
        
        }  
        catch(Exception $e){
            DB::rollback();
        }

        $notification='The user has been created successfully.';
        return redirect('/users')->with(compact('notification')); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {

        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
      
        try
        {
           
            DB::beginTransaction();
                $user->name = $request->name;
                $user->email = $request->email;
                $user->rol_id = $request->rol_id;
                $user->save();
         
            DB::commit();  
        
            }  
            catch(Exception $e){
                DB::rollback();
            }            

        $notification='The user has been successfully updated.';
        return redirect('/users')->with(compact('notification')); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
           
        $user->active = false;
        $user->save();
        $notification='The user has been successfully inactivated.';
        return redirect('/users')->with(compact('notification')); 
    }

    public function login(LoginFormRequest $request)
    {      
         if(Auth::attempt(['email'=>$request->email,'password'=>$request->password],false)){
            $user = Auth::user();
            return $user;
        }else{
            return response()->json(['errors'=>['login'=>['Los datos no son validos']]]);
        } 
    }
}
