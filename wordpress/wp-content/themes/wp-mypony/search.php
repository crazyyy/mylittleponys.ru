<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main">
        <h1 class="heading heading-category heading-pink"><?php echo sprintf( __( '%s Search Results for ', 'wpeasy' ), $wp_query->found_posts ); echo get_search_query(); ?></h1>
        <?php get_template_part( 'loop'); ?>
        <?php get_template_part( 'pagination'); ?>
        <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>
