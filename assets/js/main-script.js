(function ($) {
  "use strict";

  // COMPONENT: Submenu dropdown toggler

  if ($(".main-menu li.menu-item-has-children ul").length) {
    $(".main-menu li.menu-item-has-children").append(
      '<div class="dropdown-btn"><i class="flaticon flaticon-arrow-down-sign-to-navigate"></i></div>'
    );

    // COMPONENT: Dropdown Button
    $(".main-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
      }
    );

    // COMPONENT: Disable dropdown parent link
    $(
      ".main-menu .navigation li.menu-item-has-children > a, .hidden-bar .side-menu li.menu-item-has-children > a"
    ).on("click", function () {
      e.preventDefault();
    });
  }

  // COMPONENT: mobile nav hide / show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $("#top-navigation .navigation").html();

    $(".mobile-menu .navigation").append(mobileMenuContent);

    $(".sticky-header .navigation").append(mobileMenuContent);

    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });

    //  COMPONENT: Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
      }
    );

    // COMPONENT: Menu Toggle button addClass
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //  COMPONENT: Menu Toggle button removeClass
    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }
})(jQuery);
