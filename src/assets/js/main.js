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

            var $accordion_component = $('.js-accordion');

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
                    });
                });
            }

            /* ==========================================================================
               Alert
               ========================================================================== */

            var $alert_component = $('.js-alert');

            if ($alert_component.length > 0)
            {
                $alert_component.each(function ()
                {
                    var $alert = $(this);

                    var $dismiss_alert = $('.js-dismiss', $alert);

                    $dismiss_alert.on('click', function (e)
                    {
                        e.preventDefault();

                        $alert.fadeOut();
                    });
                });
            }

            /* ==========================================================================
               Carousel
               ========================================================================== */

            var $carousel_component = $('.js-carousel');

            if ($carousel_component.length > 0)
            {
                $carousel_component.each(function ()
                {
                    var $carousel = $(this);

                    $carousel.slick({
                        dots: true
                    });
                });
            }

            /* ==========================================================================
               Map
               ========================================================================== */

            renderMapEmbed();

            /**
             * Render the static map image or embedded iframe depending on the screen width
             */

            function renderMapEmbed()
            {
                var $map_embed = $('.js-map-embed');

                if ($map_embed.length > 0)
                {
                    var screen_width = document.body.clientWidth;
                    var breakpoint_xs = 480; // This is the equivalent of `@bp-xs`
                    var url_embed = $map_embed.data('url-embed');
                    var $map_embed_img = $('.map-embed__img', $map_embed);
                    var $map_embed_canvas = $('.map-embed__canvas', $map_embed);
                    var $map_embed_button = $('.btn', $map_embed);

                    if (screen_width >= breakpoint_xs) // Display the interactive embedded map
                    {
                        $map_embed_img.addClass('is-hidden');
                        $map_embed_button.addClass('is-hidden');
                        $map_embed_canvas.attr('src', url_embed);
                        $map_embed_canvas.removeClass('is-hidden');
                    }
                    else // Display a static image of the map
                    {
                        $map_embed_img.removeClass('is-hidden');
                        $map_embed_button.removeClass('is-hidden');
                        $map_embed_canvas.attr('src', '');
                        $map_embed_canvas.addClass('is-hidden');
                    }
                }
            }

            /* ==========================================================================
               Navigation Dropdown
               ========================================================================== */

            var $nav_dropdown = $('.js-nav-dropdown');

            if ($nav_dropdown.length > 0)
            {
                $('a', $nav_dropdown).each(function ()
                {
                    var $anchor = $(this);
                    var $anchor_icon = $('.icon', $anchor);
                    var $menu = $anchor.next('.list--menu');
                    var icon_up = $anchor.data('icon-up');
                    var icon_down = $anchor.data('icon-down');

                    $anchor.on('click', function (e)
                    {
                        /**
                         * Prevent click on primary drop-down anchor
                         */

                        if ($(this).next().hasClass('list--menu'))
                        {
                            e.preventDefault();
                        }

                        $menu.toggleClass('is-open');

                        if ($menu.hasClass('is-open'))
                        {
                            $menu.attr('aria-hidden', 'false');
                            $anchor_icon.removeClass(icon_down).addClass(icon_up);
                        }
                        else
                        {
                            $menu.attr('aria-hidden', 'true');
                            $anchor_icon.removeClass(icon_up).addClass(icon_down);
                        }

                        $('.list--menu', $nav_dropdown).not($menu).removeClass('is-open').attr('aria-hidden', 'true');
                        $('.icon', $nav_dropdown).not($anchor_icon).removeClass(icon_up).addClass(icon_down);
                    });
                });
            }

            /* ==========================================================================
               Placeholder
               ========================================================================== */

            $('input, textarea').placeholder();

            /* ==========================================================================
               Tabs
               ========================================================================== */

            var $tabs_component = $('.js-tabs');

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
               Toggle Dropdown Buttons
               ========================================================================== */

            var $toggle_dropdown_buttons = $('.js-toggle-dropdown-btn');

            if ($toggle_dropdown_buttons.length > 0)
            {
                $toggle_dropdown_buttons.each(function ()
                {
                    var $button = $('.btn', $(this));

                    $button.on('click', function ()
                    {
                        /**
                         * Open the current dropdown
                         */

                        $(this).toggleClass('is-active');

                        var dropdown_id = $(this).data('dropdown-id');
                        var $dropdown = $('#' + dropdown_id);

                        if ($dropdown.length > 0)
                        {
                            $dropdown.toggleClass('is-open');

                            /**
                             * Toggle ARIA attributes
                             */

                            if ($dropdown.hasClass('is-open'))
                            {
                                $dropdown.attr('aria-hidden', 'false');
                                $button.attr('aria-expanded', 'true');
                            }
                            else
                            {
                                $dropdown.attr('aria-hidden', 'true');
                                $button.attr('aria-expanded', 'false');
                            }

                            /**
                             * Close all other dropdowns
                             */

                            var $dropdowns = $('.dropdown', $toggle_dropdown_buttons);

                            $dropdowns.not($dropdown).each(function ()
                            {
                                $(this).removeClass('is-open');
                                $(this).attr('aria-hidden', 'true');
                            });
                        }
                    });
                });
            }

            /* ==========================================================================
               Toggle Password
               ========================================================================== */

            var $toggle_password = $('.js-toggle-password');

            if ($toggle_password.length > 0 && isModernBrowser)
            {
                $toggle_password.each(function ()
                {
                    var $form = $(this);
                    var $input = $('input[type="password"]', $form);
                    var $toggle = $('.js-toggle', $form);

                    $toggle.removeClass('u-visuallyhidden'); // Enable the toggle button

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

            var $tooltips = $('.js-tooltip');

            if ($tooltips.length > 0)
            {
                $tooltips.each(function ()
                {
                    $(this).tooltip();
                });
            }

            /* ==========================================================================
               Resize
               ========================================================================== */

            $(window).on('resize', function ()
            {
                renderMapEmbed();
            });
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
