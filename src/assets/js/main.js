/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/XtN0RS by Jason Garber
 * ======================================================================== */

SITENAME = {

    common: {

        init: function ()
        {
            /*
             * Check to see if the current browser supports DOM level 2 events e.g. `addEventListener`.
             * Internet Explorer 8 and below does not.
             * Based on: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
             */

            var isModernBrowser = ('addEventListener' in window) ? true : false;

            /* ==========================================================================
               Accordion
               ========================================================================== */

            var $accordion_component = $('[data-component="accordion"]');

            if ($accordion_component.length > 0)
            {
                $accordion_component.each(function ()
                {
                    var $accordion = $(this);
                    var $accordion_link = $('.accordion-item__link', $accordion);

                    $accordion_link.on('click', function (e)
                    {
                        e.preventDefault();

                        var $link = $(this);
                        var $item = $link.parents('.accordion-item');
                        var $icon = $('.icon', $link);
                        var icon_up = $link.data('icon-up');
                        var icon_down = $link.data('icon-down');

                        /*
                         * Update the selected accordion item
                         */

                        if ($item.hasClass('is-selected'))
                        {
                            $item.removeClass('is-selected');
                            $item.attr('aria-hidden', 'true').attr('aria-selected', 'false');
                            $icon.removeClass(icon_up).addClass(icon_down);
                        }
                        else
                        {
                            $item.addClass('is-selected');
                            $item.attr('aria-hidden', 'false').attr('aria-selected', 'true');
                            $icon.removeClass(icon_down).addClass(icon_up);
                        }

                        /*
                         * Reset the display of all other accordion items
                         */

                        $('.accordion-item__link .icon', $accordion).not($icon).removeClass(icon_up).addClass(icon_down);
                        $('.accordion-item', $accordion).not($item).removeClass('is-selected').attr('aria-hidden', 'true').attr('aria-selected', 'false');
                    });
                });
            }

            /* ==========================================================================
               Alert
               ========================================================================== */

            var $alert_component = $('[data-component="alert"]');

            if ($alert_component.length > 0)
            {
                $alert_component.each(function ()
                {
                    var $alert = $(this);

                    var $dismiss_alert = $('[data-action="dismiss"]', $alert);

                    $dismiss_alert.on('click', function (e)
                    {
                        e.preventDefault();

                        $alert.fadeOut();
                    });
                });
            }

            /* ==========================================================================
               Map
               ========================================================================== */

            renderMap();

            /**
             * Render the static map image or embedded iFrame depending on the screen width
             */

            function renderMap ()
            {
                var $map = $('[data-component="map"]');

                if ($map.length > 0)
                {
                    var screen_width = document.body.clientWidth;
                    var breakpoint = 640; // This is the equivalent of `@bp-xs`
                    var url_embed = $map.data('url-embed');
                    var $map_img = $('.map__img', $map);
                    var $map_canvas = $('.map__canvas', $map);
                    var $map_button = $('.btn', $map);

                    if (screen_width >= breakpoint) // Display the interactive embedded map
                    {
                        $map_img.addClass('is-hidden');
                        $map_button.addClass('is-hidden');
                        $map_canvas.attr('src', url_embed);
                        $map_canvas.removeClass('is-hidden');
                    }
                    else // Display a static image of the map
                    {
                        $map_img.removeClass('is-hidden');
                        $map_button.removeClass('is-hidden');
                        $map_canvas.attr('src', '');
                        $map_canvas.addClass('is-hidden');
                    }
                }
            }

            /* ==========================================================================
               Placeholder
               ========================================================================== */

            $('input, textarea').placeholder();

            /* ==========================================================================
               Resize
               ========================================================================== */

            $(window).on('resize', function ()
            {
                renderMap();
            });

            /* ==========================================================================
               Tabs
               ========================================================================== */

            var $tabs_component = $('[data-component="tabs"]');

            if ($tabs_component.length > 0)
            {
                $tabs_component.each(function ()
                {
                    var $tabs = $(this);
                    var $tablist = $('.tab-list', $tabs);
                    var $tablist_link = $('a', $tablist);

                    $tablist_link.on('click', function (e)
                    {
                        e.preventDefault();

                        var $link = $(this);
                        var $tab = $link.parent();
                        var tab_panel_id = $tab.attr('aria-controls');
                        var $tab_panel = $('#' + tab_panel_id);

                        /*
                         * Reset the display of all other tabs
                         */

                        $('.tab-list li', $tabs).not($tab).removeClass('is-selected').attr('aria-selected', 'false');
                        $('.tab-panel', $tabs).not($tab_panel).removeClass('is-active').attr('aria-hidden', 'true');

                        /*
                         * Display the selected tab
                         */

                        if (!$tab.hasClass('is-selected'))
                        {
                            $tab.attr('aria-selected', 'true');
                            $tab.addClass('is-selected');
                            $tab_panel.addClass('is-active');
                            $tab_panel.attr('aria-hidden', 'false');
                        }
                    });
                });
            }

            /* ==========================================================================
               Toggle Password
               ========================================================================== */

            var $toggle_password = $('[data-component="toggle-password"]');

            if ($toggle_password.length > 0 && isModernBrowser)
            {
                $toggle_password.each(function ()
                {
                    var $form = $(this);
                    var $input = $('input[type="password"]', $form);
                    var $toggle = $('[data-toggle="password"]', $form);

                    $toggle.removeClass('visuallyhidden'); // Enable the toggle button

                    /*
                     * Switch the input type
                     */

                    $toggle.on('click', function (e)
                    {
                        e.preventDefault();

                        if ($input.attr('type') == 'password')
                        {
                            $toggle.html('Hide');
                            $input.attr('type', 'text');
                        }
                        else
                        {
                            $toggle.html('Show');
                            $input.attr('type', 'password');
                        }

                        $input.focus(); // Keep keyboard active on touchscreen devices
                    });

                    /*
                     * Reset the input type
                     */

                    $form.on('submit', function ()
                    {
                        $input.attr('type', 'password');
                    });
                });
            }

            /* ==========================================================================
               Tooltips
               ========================================================================== */

            var $tooltips = $('[data-component="tooltip"]');

            if ($tooltips.length > 0)
            {
                $tooltips.each(function ()
                {
                    $(this).tooltip();
                });
            }
        }
    },

    controller: {

        init: function ()
        {

        },

        view: function ()
        {

        }
    }
};

UTIL = {

    exec: function (controller, action)
    {
        var ns = SITENAME;
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

        UTIL.exec('common');
        UTIL.exec(controller);
        UTIL.exec(controller, action);
    }
};
