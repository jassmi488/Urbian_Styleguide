/* ==========================================================================
 * Style Guide JavaScript
 * ========================================================================== */

(function () {

    'use strict';

    /* ==========================================================================
     * Code
     * ========================================================================== */

    var $code = $('.js-sg-code');

    if ($code.length > 0) {
        $code.each(function () {
            var $code_sample = $('code', $(this));

            /*
             * Escape text and replace with HTML character entities
             */

            $code_sample.text($code_sample.html());

            /*
             * Using `%2D` instead of `-` so that JavaScript is not initialized in `<code>` blocks
             */

            $code_sample.html($code_sample.html().replace(/%2D/g, '-'));
        });

        /*
         * Make the source code pretty
         */

        /*global prettyPrint*/
        prettyPrint();
    }

    /* ==========================================================================
     * Navigation Toggle
     * ========================================================================== */

    var $nav_toggle = $('.js-sg-nav-toggle');

    if ($nav_toggle.length > 0) {

        $nav_toggle.on('click', function (e) {
            e.preventDefault();

            var $nav = $('.js-sg-nav');

            if ($nav.length > 0) {
                $nav.toggleClass('is-open');
                $nav_toggle.toggleClass('is-active');
            }
        });
    }
})();
