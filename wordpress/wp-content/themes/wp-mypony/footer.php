</div>
<!-- /wrapper -->

<!-- footer -->
<footer class="footer" role="contentinfo">
  <div class="mainfooter">
    <?php if ( is_active_sidebar( 'widgetarea1') ) : ?>
    <?php dynamic_sidebar( 'widgetarea1' ); ?>
    <?php else : ?>
    <?php endif; ?>
    <!-- footer-widget footer-widget-left -->

    <?php if ( is_active_sidebar( 'widgetarea2') ) : ?>
    <?php dynamic_sidebar( 'widgetarea2' ); ?>
    <?php else : ?>
    <?php endif; ?>
    <!-- footer-widget footer-widget-middle -->

    <?php if ( is_active_sidebar( 'widgetarea3') ) : ?>
    <?php dynamic_sidebar( 'widgetarea3' ); ?>
    <?php else : ?>
    <?php endif; ?>
    <!-- footer-widget footer-widget-right -->

    <p class="copyright">&copy; <?php echo date("Y"); ?>Собственность <?php bloginfo( 'name'); ?>.</p>
    <!-- /copyright -->
  </div>
  <!-- /.mainfooter -->
</footer>
<!-- /footer -->

<div class="backhead bkblock0n">
</div>
<!-- backhead bkblock0n -->
<?php wp_footer(); ?>
</body>
</html>

