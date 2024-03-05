@extends('layouts.app')

@section('content')
<div class="container">


    <div class="row justify-content-start login">

        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    <img  class="w-75 mx-auto d-block" src="{{ asset('assets/img/LOGO.png') }}" alt="">
                </div>

                <div class="card-body body-login">

                    <h4>Log in</h4>

                    <form method="POST" class="login-form" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group mb-3">

                            <label for="email" class="log-label">User</label>

                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <b>{{ $message }}</b>
                                </span>
                            @enderror
                        </div>

                        <div class="form-group mb-3">

                            <label for="password" class="log-label">Password</label>

                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <b>{{ $message }}</b>
                                </span>
                            @enderror
                        </div>

                        <div class="form-group mb-0">
                            <button type="submit" class="btn btn-primary btn-block mb-0">Sign up</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <ul class="cb-slideshow">
        <li>
            <span>Image 01</span>
           
        </li>
        <li>
            <span>Image 02</span>
           
        </li>
        <li>
            <span>Image 03</span>
           
        </li>
    </ul>

</div>
@endsection
