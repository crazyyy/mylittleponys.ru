<?php get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main" class="single-pony">
        <h1 class="heading heading-pink"><span></span><?php the_title(); ?></h1>
        <!-- article -->
        <article>
            <div class="single-video">
                <iframe width="920" height="515" src="https://www.youtube.com/embed/<?php the_field('insert-video'); ?>" frameborder="0" allowfullscreen></iframe>
            </div>
            <!-- /single game -->
            <div class="share-social share-social-bdrs-bot">
                <h6>Нравится серия? Расскажи друзьям!</h6>
                <?php get_template_part( 'template-share'); ?>
            </div>
            <!-- /share-social -->
            <?php the_content(); ?>
        </article>
        <!-- /article -->
        <h3 class="heading heading-enable heading-violet heading-pony-violet"><span></span>Похожее видео
            	<a href="<?php echo home_url(); ?>/pony-video">Всё видео></a>
            </h3>
        <ul class="clearfix new-series-video">
          <?php
            $args = array(
              'post_type' => 'pony-video',
              'posts_per_page' => 3,
              );
            query_posts($args);
          ?>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php get_template_part( 'loop-new-series'); ?>
          <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>
        </ul>
        <!-- other-pony-list -->
      <?php get_template_part( 'template-comments'); ?>
      <?php get_template_part( 'template-teaser'); ?>
    </section>
    <!-- /section -->

</div>
<!-- /.container -->
<?php get_footer(); ?>
