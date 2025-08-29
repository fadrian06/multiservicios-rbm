(($) => {
	// input spinner
	var initQuantitySpinner = () => {
		$(".product-qty").each(function () {
			var $el_product = $(this);
			var quantity = 0;

			$el_product.find(".quantity-right-plus").click((e) => {
				e.preventDefault();
				var quantity = parseInt($el_product.find("#quantity").val());
				$el_product.find("#quantity").val(quantity + 1);
			});

			$el_product.find(".quantity-left-minus").click((e) => {
				e.preventDefault();
				var quantity = parseInt($el_product.find("#quantity").val());
				if (quantity > 0) {
					$el_product.find("#quantity").val(quantity - 1);
				}
			});
		});
	};

	var initScrollNav = () => {
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			$(".navbar.fixed-top").addClass("bg-black");
		} else {
			$(".navbar.fixed-top").removeClass("bg-black");
		}
	};

	// init image zoom on single product page
	var initImageZoom = () => {
		$(".image-zoom")
			// tile mouse actions
			.on("mouseover", function () {
				$(this)
					.children(".photo")
					.css({ transform: `scale(${$(this).attr("data-scale")})` });
			})
			.on("mouseout", function () {
				$(this).children(".photo").css({ transform: "scale(1)" });
			})
			.on("mousemove", function (e) {
				$(this)
					.children(".photo")
					.css({
						"transform-origin":
							((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
							"% " +
							((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
							"%",
					});
			})
			// tiles set up
			.each(function () {
				$(this)
					// add a photo container
					.append('<div class="photo"></div>')
					// set up a background image for each tile based on data-image attribute
					.children(".photo")
					.css({
						"background-image": `url(${$(this).attr("data-image")})`,
					});
			});
	};

	$(window).scroll(() => {
		initScrollNav();
	});

	$(window).load(() => {
		$(".btn-nav").on("click tap", function () {
			$(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
			$(this).toggleClass("animated");
		});
	});

	// document ready
	$(document).ready(() => {
		initQuantitySpinner();
		initImageZoom();

		$(".youtube").colorbox({
			iframe: true,
			innerWidth: 960,
			innerHeight: 585,
		});

		var Sticky = new hcSticky(".sticky-info", {
			stickTo: "section.single-product",
			innerTop: 200,
			// followScroll: false,
			responsive: {
				980: {
					disable: true,
				},
			},
		});
	}); // document ready
})(jQuery);
