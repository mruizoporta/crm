@extends('layouts.panel')

@section('content')
<div class="card shadow">
    <div class="card-header ">
      <div class="row align-items-center">
        <div class="col">
          <h5 class="mb-0">
            <span class="glyphicon glyphicon-lock"></span> Edit rol</h5>
        </div>
        <div class="col text-right">
          <a href="{{url('/roles')}}" class="btn btn-sm btn-default">Regresar
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
       
        </div>
      </div>
    </div>
    
    <div class="card-body">
      @if($errors->any())
      @foreach($errors->all() as $error)
      <div class="alert alert-danger" role="alert">
        <i class="fas fa-exclamation-triangle"></i>
      <strong>Por favor!</strong> {{$error}}
      </div>
      @endforeach
      @endif
      
		<div class="box-typical box-typical-padding">
      <form action="{{url('/roles/'.$rol->id)}}" method="POST">   
        @csrf
        @method('PUT')
            <div class="form-group">
                <label for="name"> Name </label>
                <input type="text" name="name" class="form-control" value="{{ $rol->name}}" require> 
            </div>           
            
          
            <button type="submit" class="btn btn-sm btn-success" > Update role</button>
        </form>
        </div>
    </div>
  </div>


@endsection