<?php /* Template Name: Home Page */ get_header(); ?>
    <div class="container inner">
        <!-- section -->
        <section role="main">
            <h2 class="heading heading-pink heading-pony-pink"><span></span>Новые игры <a href="<?php echo home_url(); ?>/pony-game">Все игры ›</a></h2>
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
            <a href="<?php echo home_url(); ?>/pony-game" class="butt butt-midle butt-violet">Все игры</a>
            <!-- article -->
            <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <article>
                <?php the_content(); ?>
            </article>
            <?php endwhile; else: // If 404 page error ?>
            <article>
                <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
            </article>
            <?php endif; ?>
            <h2 class="heading heading-pink heading-pony-pink-v2"><span></span>Новые серии <a href="<?php echo home_url(); ?>/pony-video">Все серии ›</a></h2>
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
            </ul><!-- clearfix new-series-video -->
            <a href="<?php echo home_url(); ?>/pony-video" class="butt butt-midle butt-pink">Все серии</a>
            <article>
              <?php the_field('second-content'); ?>
            </article>

            <div class="article-gallery">
                <h5><span>Галерея</span></h5>
                <ul class="clearfix gallery-list">
                  <?php
                  $images = get_field('gallery');
                  if( $images ): ?>
                    <?php foreach( $images as $image ): ?>
                    <li>
                      <a href="<?php echo $image['url']; ?>">
                       <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
                      </a>
                    </li>
                  <?php endforeach; endif; ?>
                </ul><!-- gallery-list -->
                <a href="<?php echo home_url(); ?>/pony-video" class="butt butt-midle butt-orange">Все серии</a>
            </div>
            <!-- /.article-gallery -->

            <article>
                <?php the_field('third-content'); ?>
            </article>
            <?php get_template_part( 'template-teaser'); ?>
        </section>
        <!-- /section -->
    </div>
    <!-- /.container -->
<?php get_footer(); ?>
