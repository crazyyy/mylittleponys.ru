<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main">
        <h2 class="heading heading-pink">Список персонажей мультсериала "Дружба - это чудо"</h2>
        <ul class="other-pony-list clearfix">
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <?php get_template_part( 'loop-pony-list'); ?>
            <?php endwhile; else: ?>
            <!-- no post -->
            <?php endif; ?>
        </ul>
        <?php get_template_part( 'pagination'); ?>
        <article>
             <?php the_field('pony-descr', 'option'); ?>
        </article>

        <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>
