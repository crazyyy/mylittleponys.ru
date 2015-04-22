<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main">
        <h2 class="heading heading-pink">Игры Пони Дружба это чудо</h2>
        <ul class="game-list-category clearfix">
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <?php get_template_part( 'loop-similar-games'); ?>
            <?php endwhile; else: ?>
            <!-- no post -->
            <?php endif; ?>
        </ul>
        <!-- game-list-category -->
        <?php get_template_part( 'pagination'); ?>
        <article>
            <?php the_field( 'game-descr', 'option'); ?>
        </article>
        <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>