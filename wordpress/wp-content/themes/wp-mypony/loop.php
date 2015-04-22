<ul class="clearfix looper">
    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <li>
        <a href="<?php the_permalink(); ?>">
            <?php if ( has_post_thumbnail()) : the_post_thumbnail( 'medium'); else: ?>
            <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
            <?php endif; ?>
            <h2 class="looper-title inner-title"><?php the_title(); ?></h2>
        </a>
    </li>

    <?php endwhile; else: ?>

    <li class="error-404">
        <h3 class="title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h3>
    </li>
    <?php endif; ?>
</ul>