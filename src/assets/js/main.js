/* ==========================================================================
 * Custom JavaScript
 * ========================================================================== */

(function () {
    'use strict';

    /*
     * Check to see if the current browser supports DOM level 2 events e.g. `addEventListener`.
     * Internet Explorer 8 and below does not.
     * Based on: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
     */

    var isModernBrowser = ('addEventListener' in window);

    /* ==========================================================================
     * Accordion
     * ========================================================================== */

    var $accordion_component = $('.js-accordion');

    if ($accordion_component.length > 0) {
        $accordion_component.each(function () {
            var $accordion = $(this);
            var $accordion_link = $('.accordion-item__link', $accordion);

            $accordion_link.on('click', function (e) {
                e.preventDefault();

                var $link = $(this);
                var $item = $link.parents('.accordion-item');
                var $icon = $('.icon', $link);
                var icon_up = $accordion_component.data('icon-up');
                var icon_down = $accordion_component.data('icon-down');

                /*
                 * Update the selected accordion item
                 */

                if ($item.hasClass('is-selected')) {
                    $item.removeClass('is-selected');
                    $item.attr('aria-hidden', 'true').attr('aria-selected', 'false');
                    $icon.removeClass(icon_up).addClass(icon_down);
                }
                else {
                    $item.addClass('is-selected');
                    $item.attr('aria-hidden', 'false').attr('aria-selected', 'true');
                    $icon.removeClass(icon_down).addClass(icon_up);
                }
            });
        });
    }

    /* ==========================================================================
     * Alert
     * ========================================================================== */

    var $alert_component = $('.js-alert');

    if ($alert_component.length > 0) {
        $alert_component.each(function () {
            var $alert = $(this);
            var $dismiss_alert = $('.js-dismiss', $alert);

            $dismiss_alert.on('click', function (e) {
                e.preventDefault();

                $alert.fadeOut(250);
            });
        });
    }

    /* ==========================================================================
     * Button Dropdown
     * ========================================================================== */

    var $button_dropdown = $('.js-btn-dropdown');

    if ($button_dropdown.length > 0) {
        $button_dropdown.each(function () {
            var $button = $('.btn', $(this));

            $button.on('click', function () {

                /*
                 * Open the current dropdown
                 */

                $(this).toggleClass('is-active');

                var dropdown_id = $(this).data('dropdown-id');
                var $dropdown = $('#' + dropdown_id);

                if ($dropdown.length > 0) {
                    $dropdown.toggleClass('is-open');

                    /*
                     * Toggle ARIA attributes
                     */

                    if ($dropdown.hasClass('is-open')) {
                        $dropdown.attr('aria-hidden', 'false');
                    }
                    else {
                        $dropdown.attr('aria-hidden', 'true');
                    }

                    /*
                     * Close all other dropdowns
                     */

                    var $dropdowns = $('.dropdown', $button_dropdown);

                    $dropdowns.not($dropdown).each(function () {
                        $(this).removeClass('is-open');
                        $(this).attr('aria-hidden', 'true');
                    });
                }
            });
        });
    }

    /* ==========================================================================
     * Carousel
     * ========================================================================== */

    var $carousel_component = $('.js-carousel');

    if ($carousel_component.length > 0) {
        $carousel_component.each(function () {
            var $carousel = $(this);
            var dots = $carousel.data('dots');
            var infinite = $carousel.data('infinite');

            $carousel.slick({
                dots: typeof dots !== 'undefined' ? dots : false,
                infinite: typeof infinite !== 'undefined' ? infinite : true
            });
        });
    }

    /* ==========================================================================
     * Collapse
     * ========================================================================== */

    var $collapse_component = $('.js-collapse');

    if ($collapse_component.length > 0) {
        $collapse_component.each(function () {
            var $collapse = $(this);
            var collapse_id = $collapse.data('collapse-id');

            /*
             * Show the toggle
             */

            $collapse.removeClass('u-hidden');

            /*
             * Collapse all elements
             */

            if (typeof collapse_id !== 'undefined') {
                var $el = $('#' + collapse_id);

                if ($el.length > 0) {
                    $el.addClass('collapse');
                }

                /*
                 * Open the collapsed element by default
                 */

                var collapse_open = $collapse.data('collapse-open');

                if (typeof collapse_open !== 'undefined') {
                    if (collapse_open) {
                        $el.addClass('is-open');
                    }
                }
            }

            $collapse.on('click', function (e) {
                e.preventDefault();

                /*
                 * Toggle the display of the element
                 */

                $el.toggleClass('is-open');

                /*
                 * Set the active class on the toggle
                 */

                var collapse_toggle = $collapse.data('collapse-toggle');

                if (typeof collapse_toggle !== 'undefined') {
                    if (collapse_toggle) {
                        $collapse.toggleClass('is-active');
                    }
                }

                /*
                 * Hide the toggle after the element display has been toggled
                 */

                var hide_toggle = $collapse.data('hide-toggle');

                if (typeof hide_toggle !== 'undefined') {
                    if (hide_toggle) {
                        $collapse.hide();
                    }
                }
            });
        });
    }

    /* ==========================================================================
     * Map
     * ========================================================================== */

    /*
     * Render a static image or embedded iframe depending on the screen width
     */

    var $map = $('.js-map');

    function renderMap () {
        var screen_width = document.body.clientWidth;
        var breakpoint_xs = 480; // This is the equivalent of `$bp-xs`
        var url_embed = $map.data('url-embed');
        var $map_img = $('.map__img', $map);
        var $map_canvas = $('.map__canvas', $map);
        var $map_button = $('.btn', $map);

        if (screen_width >= breakpoint_xs) {
            /*
             * Display the embedded map
             */

            $map_img.addClass('is-hidden');
            $map_button.addClass('is-hidden');
            $map_canvas.attr('src', url_embed);
            $map_canvas.removeClass('is-hidden');
        }
        else {
            /*
             * Display the static map image
             */

            $map_img.removeClass('is-hidden');
            $map_button.removeClass('is-hidden');
            $map_canvas.attr('src', '');
            $map_canvas.addClass('is-hidden');
        }
    }

    if ($map.length > 0) {
        renderMap();
    }

    /* ==========================================================================
     * Menu Dropdown
     * ========================================================================== */

    var $menu_dropdown = $('.js-menu-dropdown');

    if ($menu_dropdown.length > 0) {
        var icon_up = $menu_dropdown.data('icon-up');
        var icon_down = $menu_dropdown.data('icon-down');

        $('a', $menu_dropdown).each(function () {
            var $anchor = $(this);
            var $anchor_icon = $('.icon', $anchor);
            var $menu = $anchor.next('.js-menu');

            $anchor.on('click', function (e) {

                /*
                 * Toggle the dropdown menu
                 */

                if ($(this).next().hasClass('js-menu')) {
                    e.preventDefault();

                    $menu.toggleClass('is-open');

                    if ($menu.hasClass('is-open')) {
                        $menu.attr('aria-hidden', 'false');
                        $anchor_icon.removeClass(icon_down).addClass(icon_up);
                    }
                    else {
                        $menu.attr('aria-hidden', 'true');
                        $anchor_icon.removeClass(icon_up).addClass(icon_down);
                    }
                }

                /*
                 * Close all other open menus
                 */

                var $menu_other = $('.js-menu', $menu_dropdown).not($menu);
                $menu_other.removeClass('is-open').attr('aria-hidden', 'true');

                /*
                 * Reset icon of all other menu anchors
                 */

                var $anchor_other_icon = $('.icon', $menu_other.prev());
                $anchor_other_icon.removeClass(icon_up).addClass(icon_down);
            });
        });

        /*
         * Close all open menus on click outside of menu
         */

        $(document).on('click', function (e) {
            if (!$(e.target).closest($menu_dropdown).length > 0) {
                var $menus = $('.js-menu', $menu_dropdown);

                if ($menus.hasClass('is-open')) {
                    var $menu_icons = $('.icon', $menu_dropdown);
                    $menus.removeClass('is-open').attr('aria-hidden', 'true');
                    $menu_icons.removeClass(icon_up).addClass(icon_down);
                }
            }
        });
    }

    /* ==========================================================================
     * Modal
     * ========================================================================== */

    var $modal = $('.js-modal');

    if ($modal.length > 0) {
        $modal.each(function () {
            var $trigger = $(this);

            $trigger.on('click', function (e) {
                e.preventDefault();

                var modal_id = $(this).data('modal-id');

                if (typeof modal_id !== 'undefined') {
                    var $modal = $('#' + modal_id);

                    if ($modal.length > 0) {
                        $modal.modal('show');
                    }
                }
            });
        });
    }

    /* ==========================================================================
     * Password Toggle
     * ========================================================================== */

    var $password = $('.js-password');

    if ($password.length > 0 && isModernBrowser) {
        $password.each(function () {
            var $form = $(this);
            var $input = $('input[type="password"]', $form);
            var $toggle = $('.js-password-toggle', $form);

            $toggle.removeClass('u-hidden'); // Show the toggle button

            /*
             * Switch the input type
             */

            $toggle.on('click', function (e) {
                e.preventDefault();

                if ($input.attr('type') === 'password') {
                    $toggle.html('Hide');
                    $input.attr('type', 'text');
                }
                else {
                    $toggle.html('Show');
                    $input.attr('type', 'password');
                }

                $input.focus(); // Keep keyboard active on touchscreen devices
            });

            /*
             * Reset the input type
             */

            $form.on('submit', function () {
                $input.attr('type', 'password');
            });
        });
    }

    /* ==========================================================================
     * Tabs
     * ========================================================================== */

    var $tabs_component = $('.js-tabs');

    if ($tabs_component.length > 0) {
        $tabs_component.each(function () {
            var $tabs = $(this);
            var $tablist = $('.tab-list', $tabs);
            var $tablist_link = $('a', $tablist);

            $tablist_link.on('click', function (e) {
                e.preventDefault();

                var $link = $(this);
                var $tab = $link.parent();
                var tab_panel_id = $tab.attr('aria-controls');
                var $tab_panel = $('#' + tab_panel_id);

                /*
                 * Reset the display of all other tabs
                 */

                $('.tab-list li', $tabs).not($tab).removeClass('is-selected').attr('aria-selected', 'false');
                $('.tab-panel', $tabs).not($tab_panel).removeClass('is-selected').attr('aria-hidden', 'true');

                /*
                 * Display the selected tab
                 */

                if (!$tab.hasClass('is-selected')) {
                    $tab.attr('aria-selected', 'true');
                    $tab.addClass('is-selected');
                    $tab_panel.addClass('is-selected');
                    $tab_panel.attr('aria-hidden', 'false');
                }
            });
        });
    }

    /* ==========================================================================
     * Tooltips
     * ========================================================================== */

    var $tooltips = $('.js-tooltip');

    if ($tooltips.length > 0) {
        $tooltips.each(function () {
            $(this).tooltip();
        });
    }

    /* ==========================================================================
     * Resize
     * ========================================================================== */

    $(window).on('resize', function () {
        if ($map.length > 0) {
            renderMap();
        }
    });
})();
