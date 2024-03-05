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
                            <span class="glyphicon glyphicon-lock"></span> Roles</h5>
                      </div>
                      <div class="col text-right">
                        <a href="{{url('/roles/create')}}" class="btn btn-sm btn-primary edu-btn-yellow " >New role</a>
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
                    <table id="table-roles" class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th width="1">
                                #
                            </th>
                            <th>Name </th>  
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            @foreach($roles as $rol)

                            <tr>
                                <td> {{$rol-> id}} </td>
                                <td> {{$rol-> name}} </td>
                                <td>
                                  <form action="{{url('/roles/'.$rol->id.'/inactivate')}}" method="POST">
                                      @csrf 
                                      <a href="{{url('/roles/'.$rol->id.'/edit')}}" class="tabledit-edit-button btn btn-sm btn-default">
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

@section('scripts')
<script 
    src="{{ asset('js/per/categorias.js')}}">
</script>
@endsection
