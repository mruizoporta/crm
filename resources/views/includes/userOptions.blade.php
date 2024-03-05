<div class="dropdown user-menu">
    <button class="dropdown-toggle" id="dd-user-menu" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="{{ asset('img/avatar-2-64.png')}}" alt="">
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd-user-menu">      
        <a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault(); document.getElementById('formlogout').submit();"><span class="font-icon glyphicon glyphicon-log-out"></span>Salir</a>
        <form action="{{ route('logout') }}" method="POST" style="display: :none" id="formlogout">
        @csrf</form>
    </div> 
</div>
