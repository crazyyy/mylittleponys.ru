<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main">
        <h2 class="heading heading-pink">Мультсериал «Дружба - это чудо»</h2>
        <ul class="clearfix new-series-video">
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <?php get_template_part( 'loop-new-series'); ?>
            <?php endwhile; else: ?>
            <!-- no post -->
            <?php endif; ?>
        </ul>
        <!-- clearfix new-series-video -->
        <?php get_template_part( 'pagination'); ?>
        <article>
            <?php the_field( 'video-descr', 'option'); ?>
        </article>
        <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>