<?php get_header(); ?>
<div class="container inner">
<?php if (function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
	<!-- section -->
	<section role="main">
		<!-- article -->
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <h1 class="heading heading-pink"><?php the_title(); ?></h1>
		<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?>>
			<?php the_content(); ?>
    </article>
    <?php get_template_part('template-teaser'); ?>
		<?php endwhile; else: // If 404 page error ?>
    <article>
			<h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
    </article>
		<?php endif; ?>
		<!-- /article -->
	</section>
	<!-- /section -->
</div>
<!-- /.container -->
<?php get_footer(); ?>
