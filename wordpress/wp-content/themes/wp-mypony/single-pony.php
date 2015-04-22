<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <section role="main" class="single-pony">
        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
        <h1 class="heading heading-pink"><?php the_title(); ?></h1>
        <!-- article -->
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix'); ?>>
            <?php the_content(); ?>
            <div class="share-social ">
                <h6>Нравится <?php the_title(); ?>? Расскажи друзьям!</h6>
                <?php get_template_part( 'template-share'); ?>
            </div>
            <!-- share-social -->
        </article>
        <!-- /article -->
        <?php endwhile; else: ?>

        <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>

        <?php endif; ?>

        <h3 class="heading heading-violet heading-pony-violet"><span></span>Другие пони
          	<a href="<?php echo home_url(); ?>/pony">Все пони></a>
          </h3>
        <ul class="clearfix other-pony-list">
          <?php
            $temp = $wp_query;
            $wp_query= null;
            query_posts('post_type=pony'.'&showposts=4');
            while (have_posts()) : the_post();
          ?>
            <?php get_template_part( 'loop-pony-list'); ?>
          <?php endwhile; ?>
          <?php $wp_query = null; $wp_query = $temp;?>
        </ul>
        <!-- other-pony-list -->
        <?php get_template_part( 'template-comments'); ?>
        <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>
