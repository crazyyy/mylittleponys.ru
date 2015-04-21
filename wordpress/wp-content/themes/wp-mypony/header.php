<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="UTF-8">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>
    <!-- dns prefetch -->
    <link href="http://www.google-analytics.com/" rel="dns-prefetch">
    <!-- meta -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- icons -->
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
    <!-- css + javascript -->
    <?php wp_head(); ?>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/modernizr.min.js"></script>
</head>
<body <?php body_class(); ?>>
<!-- wrapper -->
<div class="wrapper clearfix">
    <!-- header -->
    <header class="header header-ws inner clearfix" role="banner">
        <!-- logo -->
    <div class="logo">
      <?php if ( is_front_page() && is_home() ){ } else { ?>
        <a href="<?php echo home_url(); ?>">
      <?php  } ?>
        <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
      <?php if ( is_front_page() && is_home() ){
      } else { ?>
        </a>
      <?php } ?>
    </div>
    <!-- /logo -->
        <!-- nav -->
        <nav class="nav" role="navigation">
            <?php wpeHeadNav(); ?>
        </nav>
        <!-- /nav -->
        <div class="slider clearfix">
            <div class="slider-container">
                <h5>новые серии</h5>
                <h6>5 сезон</h6>
                <a href="#" class="butt butt-big butt-pink">Смотреть онлайн</a>
                <img src="<?php echo get_template_directory_uri(); ?>/img/slider.jpg" alt="">
            </div>
            <div class="slider-nav"></div>
        </div>
        <!-- /.slider -->
    </header>
    <!-- /header -->
