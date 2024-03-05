<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>CRM</title>

	<link href="{{ asset('img/favicon.png') }}" rel="apple-touch-icon" type="image/png" sizes="144x144">
	<link href="{{ asset('img/favicon.png') }}" rel="apple-touch-icon" type="image/png" sizes="114x114">
	<link href="{{ asset('img/favicon.png') }}" rel="apple-touch-icon" type="image/png" sizes="72x72">
	<link href="{{ asset('img/favicon.png') }}" rel="apple-touch-icon" type="image/png">
	<link href="{{ asset('img/favicon.png') }}" rel="icon" type="image/png">
	<link href="{{ asset('img/favicon.ico') }}" rel="shortcut icon">
	<link href="{{ asset('img/favicon.57x57.png')}}" rel="apple-touch-icon" type="image/png"> 

	<link rel="stylesheet" href="{{ asset('css/separate/vendor/tags_editor.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/separate/vendor/bootstrap-select/bootstrap-select.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/separate/vendor/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lib/font-awesome/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lib/bootstrap/bootstrap.min.css') }}">  
	<link rel="stylesheet" href="{{ asset('css/separate/main.css') }}">
	
	<link rel="stylesheet" href="{{ asset('css/separate/vendor/bootstrap-datetimepicker.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/separate/vendor/bootstrap-daterangepicker.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/lib/clockpicker/bootstrap-clockpicker.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/separate/vendor/bootstrap-select/bootstrap-select.min.css')}}">	 
    <link rel="stylesheet" href="{{ asset('css/separate/pages/gallery.min.css')}}">  
  
	<link rel="stylesheet" href="{{ asset('css/separate/pages/tasks.min.css')}}">	 



</head>
<body class="with-side-menu control-panel control-panel-compact">

	<header class="site-header">
	    <div class="container-fluid">

			<button id="show-hide-sidebar-toggle" class="show-hide-sidebar">
	            <span>toggle menu</span>
	        </button>
	
	        <button class="hamburger hamburger--htla">
	            <span>toggle menu</span>
	        </button>
	        <a href="#" class="site-logo">
	            <img class="logo-per" src="{{ asset('img/Logo.png') }}" alt="">	            
	        </a>

	        <div class="site-header-content">
	            <div class="site-header-content-in">
	                <div class="site-header-shown">	                                 
	
	                 	
						@include('includes.userOptions')	
	                 
	                </div><!--.site-header-shown-->
	
	                <div class="mobile-menu-right-overlay"></div>
	               
	            </div><!--site-header-content-in-->
	        </div><!--.site-header-content-->
	    </div><!--.container-fluid-->
	</header><!--.site-header-->

	@include('includes.menu')

	<div class="page-content">
	    <div class="container-fluid">
	       @yield('content')	       
	    </div><!--.container-fluid-->
	</div><!--.page-content-->


	<script src="{{ asset('js/lib/jquery/jquery.min.js')}}"></script>
	<script src="{{ asset('js/lib/tether/tether.min.js')}}"></script>
	<script src="{{ asset('js/lib/bootstrap/bootstrap.min.js')}}"></script>
	<script src="{{ asset('js/plugins.js')}}"></script>

	<script src="{{ asset('js/lib/jquery-tag-editor/jquery.caret.min.js')}}"></script>
    <script src="{{ asset('js/lib/jquery-tag-editor/jquery.tag-editor.min.js')}}"></script>
	<script src="{{ asset('js/lib/peity/jquery.peity.min.js') }}"></script>
	<script src="{{ asset('js/lib/table-edit/jquery.tabledit.min.js') }}"></script>
	<script src="{{ asset('js/lib/bootstrap-select/bootstrap-select.min.js')}}"></script>
	<script src="{{ asset('js/lib/select2/select2.full.min.js ')}}"></script>
	<script src="{{ asset('js/lib/moment/moment-with-locales.min.js')}}"></script>
	<script src="{{ asset('js/lib/eonasdan-bootstrap-datetimepicker/bootstrap-datetimepicker.min.js')}}"></script>
	<script src="{{ asset('js/lib/clockpicker/bootstrap-clockpicker.min.js')}}"></script>
	<script src="{{ asset('js/lib/clockpicker/bootstrap-clockpicker-init.js')}}"></script>
	<script src="{{ asset('js/lib/daterangepicker/daterangepicker.js')}}"></script>


	@stack('scrips')
	
	<script src="{{ asset('js/app.js')}}"></script>
	<script src="{{ asset('js/lib/input-mask/jquery.mask.min.js')}}"></script>
	<script src="{{ asset('js/lib/input-mask/input-mask-init.js')}}"></script>
	
</body>
</html>