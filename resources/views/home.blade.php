@extends('layouts.panel')

@section('content')
<div class="row">	  
    
    <div class="col-md-12 mb-4">
        <div class="card">
            <div class="card-header">{{ __('Dashboard') }}</div>

            <div class="card-body">
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

             
            </div>
        </div>
    </div>

    <div class="col-xl-12">
        <div class="row">
            <div class="col-sm-3">
                <article class="statistic-box red">
                    <div>
                        <div class="number">26</div>
                        <div class="caption"><div>Activities completed/Current day</div></div>	                                
                    </div>
                </article>
            </div><!--.col-->
            <div class="col-sm-3">
                <article class="statistic-box yellow">
                    <div>
                        <div class="number">12</div>
                        <div class="caption"><div>Quotes / Current month</div></div>
                        
                    </div>
                </article>
            </div><!--.col-->
            <div class="col-sm-3">
                <article class="statistic-box red">
                    <div>
                        <div class="number">104</div>
                        <div class="caption"><div>Registered clients / Current month</div></div>
                        
                    </div>
                </article>
            </div><!--.col-->
            <div class="col-sm-3">
                <article class="statistic-box yellow">
                    <div>
                        <div class="number">29</div>
                        <div class="caption"><div>Opportunities / Current month</div></div>	                               
                    </div>
                </article>
            </div><!--.col-->
        </div><!--.row-->
     
    </div><!--.col-->
</div><!--.row-->


@endsection
