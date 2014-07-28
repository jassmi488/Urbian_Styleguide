/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/XtN0RS by Jason Garber
 * ======================================================================== */

 SITENAME = {

    common: {

        init: function ()
        {
            /* ==========================================================================
               Map
               ========================================================================== */

            renderMap();

            /**
             * Render the static map image or embedded iFrame depending on the screen width
             */

            function renderMap()
            {
                var map = $('[data-component="map"]');

                if (map.length > 0)
                {
                    var screen_width = document.body.clientWidth;
                    var breakpoint = 640; // This is the equivalent of `@bp-xs`
                    var url_embed = map.data('url-embed');
                    var map_img = $('.map__img', map);
                    var map_canvas = $('.map__canvas', map);
                    var map_button = $('.btn', map);

                    if (screen_width >= breakpoint)
                    {
                        map_img.addClass('is-hidden');
                        map_button.addClass('is-hidden');
                        map_canvas.attr('src', url_embed);
                        map_canvas.removeClass('is-hidden');
                    }
                    else
                    {
                        map_img.removeClass('is-hidden');
                        map_button.removeClass('is-hidden');
                        map_canvas.attr('src', '');
                        map_canvas.addClass('is-hidden');
                    }
                }
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