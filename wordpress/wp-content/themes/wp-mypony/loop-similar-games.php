<li>
  <a href="<?php the_permalink(); ?>">
    <?php if ( has_post_thumbnail()) :
        the_post_thumbnail('medium');
      else: ?>
      <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
    <?php endif; ?>
    <span><?php the_title(); ?></span>
  </a>
</li>
