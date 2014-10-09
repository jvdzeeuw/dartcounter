<html ng-app="letsdart">
    <head>
        <title>Dartcounter</title>
        <meta name="description" content="DartCounter Web App">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto+Slab' rel='stylesheet' type='text/css'/>
        <?php //echo link_tag(base_url() . 'css/main.css'); ?>
        <link rel="shortcut icon" href="<?php echo base_url(); ?>/images/favicon.ico" />

        <script src="<?php echo base_url(); ?>lib/html5shiv.js"></script>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,600,300,700" rel="stylesheet" type="text/css">
        <!-- Needs images, font... therefore can not be part of main.css -->
        <link rel="stylesheet" href="<?php echo base_url(); ?>fonts/themify-icons/themify-icons.min.css">
        <link rel="stylesheet" href="<?php echo base_url(); ?>fonts/weather-icons/css/weather-icons.min.css">
        <!-- end Needs images -->
        <!--<link rel="stylesheet" href="<?php echo base_url(); ?>css/main.css">-->
        <link rel="stylesheet" href="<?php echo base_url(); ?>styles/main.css">
        <link rel="stylesheet" href="<?php echo base_url(); ?>css/scoreboard.css">
    </head>
    <body data-ng-app="app" id="app" class="app" data-custom-page data-off-canvas-nav data-ng-controller="AppCtrl" data-ng-class=" {'layout-boxed': admin.layout === 'boxed'} ">
        <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-55276866-1', 'auto');
      ga('send', 'pageview');

    </script>
	<img src="http://www.darts100.com/code/code.php?id=6116" style="display:none"/>
	<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&appId=378803845579148&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
        <!--[if lt IE 9]>
            <div class="lt-ie9-bg">
                <p class="browsehappy">You are using an <strong>outdated</strong> browser.</p>
                <p>Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            </div>
        <![endif]-->
        <section id="header" class="header-container" data-ng-controller="HeaderCtrl" data-ng-class="{ 'header-fixed': admin.fixedHeader,
                                  'bg-white': ['11','12','13','14','15','16','21'].indexOf(admin.skin) >= 0,
                                  'bg-dark': admin.skin === '31',
                                  'bg-primary': ['22','32'].indexOf(admin.skin) >= 0,
                                  'bg-success': ['23','33'].indexOf(admin.skin) >= 0,
                                  'bg-info-alt': ['24','34'].indexOf(admin.skin) >= 0,
                                  'bg-warning': ['25','35'].indexOf(admin.skin) >= 0,
                                  'bg-danger': ['26','36'].indexOf(admin.skin) >= 0
                      }">
            <header class="top-header clearfix">

                <!-- Logo -->
                <div class="logo"
                     ng-class="{ 'bg-dark': ['11','31'].indexOf(admin.skin) >= 0,
                     'bg-white': admin.skin === '21',
                     'bg-primary': ['12','22','32'].indexOf(admin.skin) >= 0,
                     'bg-success': ['13','23','33'].indexOf(admin.skin) >= 0,
                     'bg-info-alt': ['14','24','34'].indexOf(admin.skin) >= 0,
                     'bg-warning': ['15','25','35'].indexOf(admin.skin) >= 0,
                     'bg-danger': ['16','26','36'].indexOf(admin.skin) >= 0,
                    }">
                    <a href="#/">
                        <!--<span>{{main.brand}}</span>-->
						<img style="width:210px; margin-top:10px" src="<?php echo base_url(); ?>images/logo_small.png" />
                    </a>
                </div>

                <!-- needs to be put after logo to make it work -->
                <div class="menu-button" toggle-off-canvas>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>

                <div class="top-nav">
                    <ul style="display:none" class="nav-left list-unstyled">
                        <li>
                            <a href="#/" data-toggle-nav-collapsed-min
                               class="toggle-min"
                               ><i class="ti-menu"></i></a>
                        </li>
                    </ul> 

					<div class="shareandlike">
						<span>Steun Dartcounter.nl!</span>
						<div class="fb-like" data-href="http://facebook.com/dartcounternl" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
					</div>
                    <ul class="nav-right pull-right list-unstyled">

                        <li ng-hide="true" class="dropdown text-normal nav-profile">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs">
                                    <span></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu with-arrow pull-right">
                                <li>
                                    <a href="#/pages/profile">
                                        <i class="ti-user"></i>
                                        <span data-i18n="My Profile"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/tasks/tasks">
                                        <i class="ti-check-box"></i>
                                        <span data-i18n="My Tasks"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/pages/lock-screen">
                                        <i class="ti-lock"></i>
                                        <span data-i18n="Lock"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/pages/signin">
                                        <i class="ti-export"></i>
                                        <span data-i18n="Log Out"></span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown langs text-normal" data-ng-controller="LangCtrl">
                            <a href="javascript:;" class="dropdown-toggle active-flag" data-toggle="dropdown">
                                <div class="flag flags-dutch"></div>
                            </a>
                            <ul class="dropdown-menu with-arrow  pull-right list-langs" role="menu">
                                <li>
                                    <a href="http://dartcounter.net"><div class="flag flags-american"></div> English</a>
								</li>
                            </ul>
                        </li>
						<li class="dropdown hidden-xs">
							<a href="javascript:;" ng-click="ToggleLegend()" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false"><i class="ti-help-alt"></i></a>
						</li>
                    </ul>
                </div>

            </header>

        </section>

        <div class="main-container">
            <aside style="display:none" id="nav-container" class="nav-container" data-ng-class="{ 'nav-fixed': admin.fixedSidebar,
                                    'nav-horizontal': admin.menu === 'horizontal',
                                    'nav-vertical': admin.menu === 'vertical',
                                    'bg-white': ['31','32','33','34','35','36'].indexOf(admin.skin) >= 0,
                                    'bg-dark': ['31','32','33','34','35','36'].indexOf(admin.skin) < 0
                   }">

                <div class="nav-wrapper">
                    <ul id="nav"
                        class="nav"
                        data-ng-controller="NavCtrl"
                        data-slim-scroll
                        data-collapse-nav
                        data-highlight-active>
                        <li><a href="#/dashboard"> <i class="ti-home"></i><span>Home</span> </a></li>
                    </ul>
                </div>
            </aside>

            <div id="content" class="content-container" style="margin:0px">
                <section data-ng-view class="view-container {{admin.pageTransition.class}}"></section>
            </div>
        </div>
        <script src="<?php echo base_url(); ?>scripts/vendor.js"></script>
        <script src="<?php echo base_url(); ?>lib/jquery-ui-sortable.min.js"></script>
        <script src="<?php echo base_url(); ?>scripts/ui.js"></script>
        <script src="<?php echo base_url(); ?>lib/ui-utils.min.js"></script>
		<script src="<?php echo base_url(); ?>lib/sanitize.js"></script>
		<script src="<?php echo base_url(); ?>lib/history.js"></script>
        <script src="<?php echo base_url(); ?>scripts/app.js"></script>
        <script src="<?php echo base_url(); ?>lib/LetsDart.js"></script>
    </body>

</html>