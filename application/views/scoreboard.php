<html ng-app="letsdart">
    <head>
        <title>Let's Dart</title>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto+Slab' rel='stylesheet' type='text/css'/>
        <?php echo link_tag(base_url() . 'css/font-awesome.min.css'); ?>
		<?php echo link_tag(base_url() . 'css/scoreboard.css'); ?>
        <?php echo link_tag(base_url() . 'css/jquery.fancybox.css?v=2.1.5'); ?>
        <link rel="shortcut icon" href="images/favicon.ico" />

        <script src="<?php echo base_url(); ?>lib/html5shiv.js"></script>
        <script src="<?php echo base_url(); ?>lib/jquery-2.1.0.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/jquery.fancybox.js?v=2.1.5"></script>
        <script src="<?php echo base_url(); ?>lib/jquery-ui-sortable.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/angular.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/ui-utils.min.js"></script>
        <script src="<?php echo base_url(); ?>lib/LetsDart.js"></script>
    </head>
    <body>
		<section class="scoreBoard left">
			<div class="scoreRow">
				<span></span><span class="remaining">501</span>
			</div>
				<span>20</span><span class="remaining">481</span>
				<span>81</span><span class="remaining">400</span>
				<span>74</span><span class="remaining">326</span>
				<span>30</span><span class="remaining">296</span>
		</section>
    </body>
</html>