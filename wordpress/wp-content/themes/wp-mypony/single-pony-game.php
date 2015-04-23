<?php  get_header(); ?>
<div class="container inner">
    <?php if (function_exists( 'dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    <!-- section -->
    <section role="main" class="single-pony">
        <h1 class="heading heading-pink"><span></span><?php the_title(); ?></h1>
        <!-- article -->
        <article>
            <div class="single-game">
             <object type=application/x-shockwave-flash
              data=<?php the_field('insert-game'); ?> width=920 height=525>
              <param name=movie value=<?php the_field('insert-game'); ?>>
             </object>
            </div>
            <!-- /single game -->
            <div class="share-social share-social-bdrs-bot">
                <h6>Нравится игра? Поделись с друзьями!!</h6>
                <?php get_template_part( 'template-share'); ?>
            </div>
            <!-- /share-social -->
             <?php the_content(); ?>
        </article>
        <!-- /article -->

        <h3 class="heading heading-enable heading-violet heading-pony-violet"><span></span>Похожие игры <a href="<?php echo home_url(); ?>/pony-game">Все игры></a></h3>
        <ul class="new-games-list-wad clearfix">
          <li><?php the_field( 'adv-game', 'option'); ?></li>
          <?php
            $args = array(
              'post_type' => 'pony-game',
              'posts_per_page' => 3,
              );
            query_posts($args);
          ?>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php get_template_part( 'loop-similar-games'); ?>
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
