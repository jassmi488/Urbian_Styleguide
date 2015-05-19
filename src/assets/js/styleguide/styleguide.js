/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/XtN0RS by Jason Garber
 * ======================================================================== */

STYLEGUIDE = {

    common: {

        init: function ()
        {
            /* ==========================================================================
               Code
               ========================================================================== */

            var $toggle_code = $('.js-sg-toggle-code');

            if ($toggle_code.length > 0)
            {
                window.prettyPrint && prettyPrint();

                $toggle_code.each(function ()
                {
                    var $toggle = $(this);
                    var $toggle_wrapper = $toggle.parent();
                    var $code = $('code', $toggle_wrapper);

                    $toggle.on('click', function ()
                    {
                        $toggle.toggleClass('is-active');

                        /*
                         * Toggle the label of the button
                         */

                        var icon_code = '<span class="sg-icon fa fa-code" aria-hidden="true"></span>';

                        if ($(this).hasClass('is-active'))
                        {
                            $(this).html(icon_code + 'Hide Code');
                        }
                        else
                        {
                            $(this).html(icon_code + 'View Code');
                        }

                        $code.toggleClass('is-visible');
                    });
                });
            }

            /* ==========================================================================
               Jump to Section
               ========================================================================== */

            var $jump_action = $('.js-sg-jump');

            $jump_action.on('change', function ()
            {
                var section = $(this).find('option:selected')[0].value;

                if (section != '')
                {
                    location.hash = '#' + section;
                }
            });

            /* ==========================================================================
               Toggle Navigation
               ========================================================================== */

            var $toggle_nav = $('.js-sg-toggle-nav');

            $toggle_nav.on('click', function ()
            {
                $('.sg-nav--primary').toggleClass('is-open');
                $toggle_nav.toggleClass('is-active');
            });
        }
    }
};

STYLEGUIDE_UTIL = {

    exec: function (controller, action)
    {
        var ns = STYLEGUIDE;
        action = ( action === undefined ) ? 'init' : action;

        if (controller !== '' && ns[controller] && typeof ns[controller][action] == 'function')
        {
            ns[controller][action]();
        }
    },

    init: function ()
    {
        var body = document.body;
        var controller = body.getAttribute('data-controller');
        var action = body.getAttribute('data-action');

        STYLEGUIDE_UTIL.exec('common');
        STYLEGUIDE_UTIL.exec(controller);
        STYLEGUIDE_UTIL.exec(controller, action);
    }
};
