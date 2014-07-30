/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/XtN0RS by Jason Garber
 * ======================================================================== */

 SITENAME = {

    common: {

        init: function ()
        {
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

                        if ($item.hasClass('is-selected'))
                        {
                            $item.attr('aria-hidden', 'false');
                            $item.removeClass('is-selected');
                            $icon.removeClass(icon_up).addClass(icon_down);
                        }
                        else
                        {
                            $item.attr('aria-hidden', 'true');
                            $item.addClass('is-selected');
                            $icon.removeClass(icon_down).addClass(icon_up);
                        }

                        /*
                         * Reset the display of all other accordion items
                         */

                        $('.accordion-item__link .icon', $accordion).not($icon).removeClass(icon_up).addClass(icon_down);
                        $('.accordion-item', $accordion).not($item).removeClass('is-selected');
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

            function renderMap()
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

                    if (screen_width >= breakpoint)
                    {
                        $map_img.addClass('is-hidden');
                        $map_button.addClass('is-hidden');
                        $map_canvas.attr('src', url_embed);
                        $map_canvas.removeClass('is-hidden');
                    }
                    else
                    {
                        $map_img.removeClass('is-hidden');
                        $map_button.removeClass('is-hidden');
                        $map_canvas.attr('src', '');
                        $map_canvas.addClass('is-hidden');
                    }
                }
            }

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