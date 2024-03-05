
@extends('layouts.panel')

@section('content')
<div class="card shadow">
    <div class="card-header ">
      <div class="row align-items-center">
        <div class="col">
          <h5 class="mb-0">
            <span class="glyphicon glyphicon-book"></span> Edit user</h5>          
        </div>
        <div class="col text-right">
          <a href="{{url('/users')}}" class="btn btn-sm btn-default">Go back
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
      <form action="{{url('/users/'.$user->id)}}" method="POST"> 
          @csrf
          @method('PUT')

          <fieldset class="form-group">
            <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>
            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{$user->name}}"  required autocomplete="name" autofocus>
            @error('nombre')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </fieldset>

          <div class="form-group">                
            <label class="form-label" for="nombrerol">Rol</label>                
            <select class="form-control" name="rol_id">
              <option value=""> --Select the role--</option>
              @foreach ($roles as $rol)
              <option value="{{ $rol -> id }}"
                @if ($rol->id == $user->rol_id)
                selected
                @endif> {{$rol -> name}} 
               
              </option>
              @endforeach  
            </select>
          </div>


            <fieldset class="form-group">
              <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>
              <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{$user->email}}" required autocomplete="email">

              @error('email')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
            </fieldset>
           
          <br>
          <br>

            <button type="submit" class="btn btn-sm btn-success">
              Update user
          </button>
            <br>
            <br>
        </form>
        </div>
    </div>
  </div>

  @push('scrips')

  <script>

$(function() {
  $('#tags-editor-textarea').tagEditor();
});


    </script>



  @endpush

@endsection


