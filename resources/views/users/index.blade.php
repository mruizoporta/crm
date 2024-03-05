@extends('layouts.panel')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header ">
                    <div class="row align-items-center">
                      <div class="col">                        
                        <h5 class="mb-0">
                            <span class="glyphicon glyphicon-home"></span> Users</h5>
                      </div>
                      <div class="col text-right">
                        <a href="{{url('/users/create')}}" class="btn btn-sm btn-primary edu-btn-yellow " >New user</a>
                      </div>
                    </div>
                  </div>
            </div>
                <div class="card-body">
                    @if(session('notification'))
                    <div class="alert alert-success" role="alert">
                      {{session('notification')}}
                    </div>
                    @endif
                </div>
                    <div class="table-responsive">
                    <table id="table-empresas" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th width="1">
                                #
                            </th>
                            <th>Name</th>                        
                            <th>Email</th>    
                            <th>Rol</th>     
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)

                            <tr>
                                <td> {{$user-> id}} </td>
                                <td> {{$user-> name}} </td>                             
                                <td> {{$user-> email}} </td> 
                                <td> {{$user-> rol->name}} </td>
                                <td>
                                    <form action="{{url('/users/'.$user->id.'/inactivate')}}" method="POST">
                                      @csrf    
                                      <a href="{{url('/users/'.$user->id.'/edit')}}" class="tabledit-edit-button btn btn-sm btn-default">
                                        <span class="glyphicon glyphicon-pencil"></span>
                                      </a>
                                     
                                      <button type="submit" class="tabledit-edit-button btn btn-sm btn-default">
                                        <span class="glyphicon glyphicon-trash"></span>
                                      </button>

                                    </form>
                                   
                                  </td>
                            </tr>
                            @endforeach
                            
                        </tbody>
                    </table>       

                </div>
            </div>
        </div>
    </div>

    
</div>


@endsection


