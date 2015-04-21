</div>
<!-- /wrapper -->

<!-- footer -->
<footer class="footer" role="contentinfo">
    <div class="mainfooter">
        <div class="footer-widget footer-widget-left">
            <h6>Игры</h6>
            <ul>
                <?php wpeFootNav(); ?>
            </ul>
        </div><!-- footer-widget footer-widget-left -->
        <div class="footer-widget footer-widget-middle">
            <h6>Мультфильм</h6>
            <?php wpeFootNav(); ?>
        </div><!-- footer-widget footer-widget-middle -->
        <div class="footer-widget footer-widget-right">
            <h6>Пони</h6>
            <?php wpeFootNav(); ?>
        </div><!-- footer-widget footer-widget-right -->

        <!-- copyright -->
        <p class="copyright">
          &copy; <?php echo date("Y"); ?>
           Собственность <?php bloginfo('name'); ?>.
        </p>
        <!-- /copyright -->
    </div>
    <!-- /.mainfooter -->
</footer>
<!-- /footer -->

<div class="backhead bkblock0n">
</div><!-- backhead bkblock0n -->
  <?php wp_footer(); ?>
</body>
</html>

