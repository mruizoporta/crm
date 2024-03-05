	<div class="mobile-menu-left-overlay"></div>
	<nav class="side-menu">
	    <ul class="side-menu-list">           
            <li>
				<a href="{{ url('/home') }}">
					<i class="glyphicon glyphicon-dashboard"></i>
					<span class="lbl">Dashboard </span>
				</a>
			</li>
	        <li class="blue with-sub">
	            <span>
	                <i class="glyphicon glyphicon-lock"></i>
	                <span class="lbl">Security</span>
	            </span>
	            <ul>
					<li><a href="{{ url('/roles') }}"><span class="lbl">Roles</span></a></li>
	                <li><a href="{{ url('/users') }}"><span class="lbl">Users</span></a></li>	                
	            </ul>
	        </li>
	    
            <li class="blue with-sub">
	            <span>
	                <i class="glyphicon glyphicon-cog"></i>
	                <span class="lbl">Setting</span>
	            </span>
	            <ul>
					<a href="{{ url('/companies') }}"><span class="lbl">Companies</span></a></li>
	                <li><a href="{{ url('/parameters/1/edit') }}"><span class="lbl">Parameters </span></a></li>	                                     
                    <li><a href="{{ url('/branches') }}"><span class="lbl">Branches</span></a></li>                    
	            </ul>
	        </li>
	        <li class="blue with-sub">
	            <span>
	                <i class="glyphicon glyphicon-book"></i>
	                <span class="lbl">Catalogs </span>
	            </span>
	            <ul>
					<li><a href="{{ url('/catalogs') }}"><span class="lbl">General catalogs</span></a></li>		
					<li><a href="{{ url('/campaigns') }}"><span class="lbl">Campaigns</span></a></li>			       
	            </ul>
	        </li>

			<li>
				<a href="{{ url('/accounts') }}">
					<i class="glyphicon glyphicon-user"></i>
					<span class="lbl">Accounts </span>
				</a>
			</li>

			<li>
				<a href="{{ url('/activities') }}">
					<i class="glyphicon glyphicon-calendar"></i>
					<span class="lbl">Activities </span>
				</a>
			</li>
			
			<li>
				<a href="{{ url('/opportunities') }}">
					<i class="glyphicon glyphicon-usd"></i>
					<span class="lbl">Opportunities </span>
				</a>
			</li>
			
		
	    
	    </ul>
	
	</nav><!--.side-menu-->