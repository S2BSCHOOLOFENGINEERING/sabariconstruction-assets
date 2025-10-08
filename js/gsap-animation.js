gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/
function sbcon_img_animation() {
    const boxes = gsap.utils.toArray('.sbcon-animation-style1,.sbcon-animation-style2,.sbcon-animation-style3,.sbcon-animation-style4,.sbcon-animation-style5,.sbcon-animation-style6,.sbcon-animation-style7');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}

function getpercentage(x, y, elm) { 
    elm.find('.sbcon-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}

function sbcon_title_animation() {

	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {

		var sbcon_var = jQuery('.sbcon-heading, .sbcon-heading-subheading');
		if (!sbcon_var.length) {
			return;
		}
		const quotes = document.querySelectorAll(".sbcon-heading-subheading .sbcon-title, .sbcon-heading .sbcon-title");

			quotes.forEach(quote => {

				//Reset if needed
				if (quote.animation) {
					quote.animation.progress(1).kill();
					quote.split.revert();
				}

				var getclass = quote.closest('.sbcon-heading-subheading, .sbcon-heading').className;
				var animation = getclass.split('animation-');
				if (animation[1] == "style4") return

				quote.split = new SplitText(quote, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(quote, { perspective: 400 });

				if (animation[1] == "style1") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: "-40deg"
					});
				}
				if (animation[1] == "style2") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						x: "50"
					});
				}
				if (animation[1] == "style3") {
					gsap.set(quote.split.chars, {
						opacity: 0,
					});
				}
				quote.animation = gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
				});
			});
		},
	});
}

var sbcon_animation_number_rotate = function() {
	jQuery('.odometer').each(function() {
		var self = jQuery(this);
		self.waypoint(function(direction) {
			var v = self.data('to');
			self.html(v);
		}, { offset: '85%' });
	});
}

// ** Hover Image Effect ** \\
function sbcon_hover_img() {
	const sbconHoverImg = gsap.utils.toArray(".sbcon-element-service-style-3 article");
	sbconHoverImg.forEach((target) => {
		const sbconImg = target.querySelector('.sbcon-hover-img');
		const t1 = gsap.timeline();
		t1.to(sbconImg, {
			opacity: 1,
			duration: 0.4,
			scale: 1,
			ease: "Power2.easeOut"
		})
		target.sbconHoverAnim = t1.play().reversed(true);
		target.addEventListener("mouseenter", sbconhoverimg);
		target.addEventListener("mouseleave", sbconhoverimg);
		target.addEventListener("mousemove", (e) => {
			let xpos = e.offsetX;
			let ypos = e.offsetY;
			const t1 = gsap.timeline();
			t1.to(sbconImg, { x: xpos, y: ypos });
		});
	});

	function sbconhoverimg() {
		this.sbconHoverAnim.reversed(!this.sbconHoverAnim.reversed());
	}
}

function sbcon_verticel_layered_pinning() {
	var sbcon_var = jQuery('.sbcon-element-portfolio-style-4');
	if (!sbcon_var.length) {
		return;
	}
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let sbconpanels = gsap.utils.toArray(".sbcon-element-portfolio-style-4 .pbminfotech-box-content");
			const spacer = 100;
		
			let sbconheight = sbconpanels[0].offsetHeight + 0;
			sbconpanels.forEach((sbconpanel, i) => {
			ScrollTrigger.create({
				trigger: sbconpanel,
				start: () => "top 0px", 
				endTrigger: '.sbcon-element-portfolio-style-4', 
				end: `bottom top+=${sbconheight + (sbconpanels.length * spacer)}`,
				pin: true, 
				pinSpacing: false, 
			});
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(sbconpanels => sbconpanels.kill(true));
		}
	});
}

function sbcon_tween_effect() {

	const sbcon_tween = gsap.utils.toArray('.sbcon-tween-effect');
	if (sbcon_tween.length == 0) return

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {

			sbcon_tween.forEach((box, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: box,
						start: "top 90%",
						end: "bottom 70%",
						scrub: 1
					},
					defaults: { ease: "none" }
				});

				let xpos_val = box.getAttribute('data-x-start');
				let xpose_val = box.getAttribute('data-x-end');
				let ypos_val = box.getAttribute('data-y-start');
				let ypose_val = box.getAttribute('data-y-end');

				let scale_x_val = box.getAttribute('data-scale-x-start');
				let scale_xe_val = box.getAttribute('data-scale-x-end');

				let skew_x_val = box.getAttribute('data-skew-x-start');
				let skew_xe_val = box.getAttribute('data-skew-x-end');
				let skew_y_val = box.getAttribute('data-skew-y-start');
				let skew_ey_val = box.getAttribute('data-skew-y-end');

				let rotation_x_val = box.getAttribute('data-rotate-x-start');
				let rotation_xe_val = box.getAttribute('data-rotate-x-end');
				gsap.set(box, { xPercent: xpos_val, yPercent: ypos_val, scale: scale_x_val, skewX: skew_x_val, skewY: skew_y_val, rotation: rotation_x_val });
				tl.to(box, { xPercent: xpose_val, yPercent: ypose_val, scale: scale_xe_val, skewX: skew_xe_val, skewY: skew_ey_val, rotation: rotation_xe_val })
			});
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(box => box.kill(true));
		}
	});
}

var sbcon_multi_icon_box_hover_effect = function() {
	jQuery(".sbcon-multi-icon-box-hover-effect .sbcon-miconheading-style-1:nth-child(2),.sbcon-multi-icon-box-hover-effect .sbcon-miconheading-style-3:nth-child(2)").eq(0).addClass('sbcon-mihbox-hover-active');
	jQuery(".sbcon-multi-icon-box-hover-effect .sbcon-miconheading-style-1,.sbcon-multi-icon-box-hover-effect .sbcon-miconheading-style-3").mouseover(function() {
		var main_row = jQuery(this).closest('.sbcon-multi-icon-box-hover-effect');
		jQuery('.sbcon-miconheading-style-1,.sbcon-miconheading-style-3', main_row).removeClass('sbcon-mihbox-hover-active');
		jQuery(this).addClass('sbcon-mihbox-hover-active');
	}).mouseout(function() {
		var main_row = jQuery(this).closest('.sbcon-multi-icon-box-hover-effect');
		jQuery('.sbcon-miconheading-style-1,.sbcon-miconheading-style-3', main_row).removeClass('sbcon-mihbox-hover-active');
		jQuery(this).addClass('sbcon-mihbox-hover-active');
	});
}

var sbcon_active_hover = function() {

	var sbcon_var = jQuery('.sbcon-element-blog-style-4,.sbcon-element-portfolio-style-2,.sbcon-element-portfolio-style-3,.sbcon-element-service-style-4,.sbcon-element-static-box-style-1,.sbcon-element-static-box-style-2');

	if (!sbcon_var.length) {
		return;
	}

	sbcon_var.each(function() {
		var sbcon_Class = '.sbcon-hover-inner li,.sbcon-blog-style-4,.swiper-hover-slide-nav .swiper-slide,.sbcon-service-style-4,.sbcon-content-box.col-md-3,.sbcon-card-box-wrapper';
		jQuery(this)
			.find(sbcon_Class).first()
			.addClass('sbcon-active');
		jQuery(this)
			.find(sbcon_Class)
			.on('mouseover', function() {
				jQuery(this).addClass('sbcon-active').siblings().removeClass('sbcon-active');
			});
	});
}

function sbcon_mousehover_tooltip() {

	jQuery("<div id='sbcon-portfolio-cursor'><div class='sbcon-tooltip-content'></div></div>").appendTo("body");

	var sbcon_text = jQuery('.sbcon-element-portfolio-style-3 .pbminfotech-post-content');
	var sbcon_cursor = jQuery("#sbcon-portfolio-cursor");

	jQuery(document).on('mousemove', function(e) {
		var sbcon_x = e.clientX;
		var sbcon_y = e.clientY;
		sbcon_cursor.css({ "transform": "translate3d(" + sbcon_x + "px, " + sbcon_y + "px, 0px)" });
	})

	if (sbcon_text.length) {
		sbcon_text.each(function() {
			var elm = jQuery(this);
			var sbcon_html = elm.find('.pbminfotech-box-content').html();
			elm.on('mouseenter', function() {
				sbcon_cursor.addClass('active').find('.sbcon-tooltip-content').html(sbcon_html);
			}).on('mouseleave', function(e) {
				sbcon_cursor.removeClass('active').find('.sbcon-tooltip-content').html('');
			});
		});
	}
}

function sbcon_portfolio3_slider() {
	jQuery(".sbcon-element-portfolio-style-3").each(function() {

		if (typeof Swiper !== 'undefined') {

			var sbcon_port_slide = new Swiper('.swiper-hover-slide-nav', {
				spaceBetween: 0,
				autoplay :false,
				loop:true,
				slidesPerView: '1',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints	: {
					1025: {
						slidesPerView: '4',
					},
					767: {
						slidesPerView: '3',
					},
					575: {
						slidesPerView: '2',
					},
				},
			});
			var sbcon_hover_fade1 = new Swiper(".sbcon-hover-image-faded", {
				speed: 6000,
				effect: 'fade',
			});
			jQuery('.sbcon-main-hover-faded .swiper-hover-slide-nav .swiper-slide').on('mouseover',function(e) {
				e.preventDefault();
				var myindex = jQuery(this).attr('data-swiper-slide-index');
				sbcon_hover_fade1.slideTo(myindex, 2000, false);
			});
		}
	});		
}

/* Static Box style1 Slide */
var sbcon_staticbox_hover_slide = function() {
	if (typeof Swiper !== 'undefined') {
		var sbcon_hover1 = new Swiper(".sbcon-static-image", {
			grabCursor: true,
			effect: "slide",
			allowTouchMove: false
		});
		var sbcon_hover2 = new Swiper(".sbcon-hover-number", {
			grabCursor: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					translate: [0, "-170%", 1],
				},
				next: {
					translate: [0, "100%", 0],
				},
			},
			allowTouchMove: false
		});
		jQuery('.sbcon-main-static-slider li').on('mouseover',function(e) {
			e.preventDefault();
			var myindex = jQuery(this).index();
			sbcon_hover1.slideTo(myindex, 500, false);
			sbcon_hover2.slideTo(myindex, 500, false);
		});
	}
}

function sbcon_extend_section() {
	const sbcon_elm = gsap.utils.toArray('.sbcon-extend-animation');
	if (sbcon_elm.length == 0) return	
	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {
			 
			sbcon_elm.forEach(section => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top 50%",
						end: "+=400px",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				tl.fromTo(section, { clipPath: 'inset(0% 6% 0% 6% )' }, { clipPath: 'inset(0% 0% 0% 0% )', duration: 1.5 })	
			});			 
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

function sbcon_animate_custom_text() {
	jQuery("#js-rotating").Morphext({
		animation: "flipInX",
		speed: 3000,
	});
}

// function sbcon_ihbox_move() {

// 	var sbcon_var = jQuery('.sbcon-move-sofa');
// 	if (!sbcon_var.length) {
// 		return;
// 	}
// 	ScrollTrigger.matchMedia({
// 		"(min-width: 1200px)": function() {

// 			gsap.set(".sbcon-move-sofa", { yPercent:20, })

// 			gsap.to(".sbcon-move-sofa", {		
// 				yPercent: -50,
// 				scrollTrigger: {
// 					scrub: true,
// 					start: () => "top top", 
// 					end:() =>  "bottom top",
// 					scrub:2
// 				}
// 			});
// 		},
// 		"(max-width:1200px)": function() {
// 			ScrollTrigger.getAll().forEach(scrub => scrub.kill(true));
// 		}
// 	});
// }

function sbcon_sticky() {

	ScrollTrigger.matchMedia({
		"(min-width: 1201px)": function() {
			let sbcon_sticky_container = jQuery(".sbcon-sticky-col");
			let section = sbcon_sticky_container.closest('.section');
			if (!section[0]) {
				section = sbcon_sticky_container.closest('.sbcon-sticky-section');
			} 
			let tl = gsap.timeline({
				scrollTrigger: {
					pin: sbcon_sticky_container,
					scrub: 1,
					start: "top top", 
					trigger: section,
					end: () => "+=" + ((section.height() + 250) - window.innerHeight), 
					invalidateOnRefresh: true
				},
				defaults: { ease: "none", duration: 1 }
			});
		},
	}); 
}

function sbcon_coverflow_testimonial() {
	if (!jQuery('.sbcon-element-testimonial-style-4').length) {
		return;
	}
	var sbcon_coverflow = new Swiper('.sbcon-element-testimonial-style-4 .sbcon-coverflow', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: false,
		spaceBetween:30,
		slidesPerView: '1',	
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 300,
			slideShadows: false,
		},
		breakpoints	: {
			575: {
				slidesPerView: '2',
				centeredSlides: true,
			},
		},
	});		
}

function sbcon_scale_video() {

	var sbcon_var = jQuery('.sbcon-element-video-scale-style-1');
	if (!sbcon_var.length) {
		return;
	}

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {

			const sbcon_scale = gsap.timeline({		
			scrollTrigger: {
				trigger	: ".sbcon-video-wrapper",
				scrub	: 0.8,
				start	: "top bottom",
				end		: "bottom top",
				ease	: "power5.out"
			}
			});
			sbcon_scale.to(".sbcon-video-wrapper", {
			duration	: 1,
			scale		: 1.5,
			});
			gsap.set(".sbcon-element-video-scale-style-1 .sbcon-ele-header-area", { yPercent: 50 });
			gsap.to(".sbcon-element-video-scale-style-1 .sbcon-ele-header-area", {
				yPercent: 280,
				scrollTrigger: {
					trigger	: ".sbcon-element-video-scale-style-1 .sbcon-ele-header-area",
					scrub	: 0.8,
					start	: "top top",
					end		: "center",
					ease	: "power5.out",
					
				}
			});
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(scrollTrigger => scrollTrigger.kill(true));
		}	
	});
}

var sbcon_hover_slide = function() {
	if (typeof Swiper !== 'undefined') {
		var sbcon_hover_slide = new Swiper(".sbcon-hover-image", {
			grabCursor: true,
			effect: "slide",
			allowTouchMove: false,
			mousewheel: false,
		});		
	}
	jQuery('.sbcon-main-hover-slider li').on('mouseover',function(e) {
		e.preventDefault();
		var myindex = jQuery(this).index();
		sbcon_hover_slide.slideTo(myindex, 500, false);
	});
}

function sbcon_card_verticel_pinning() {
	var sbcon_var = jQuery('.sbcon-element-card-box-style-1');
	if (!sbcon_var.length) {
		return;
	}
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let sbconpanels = gsap.utils.toArray(".sbcon-element-card-box-style-1 .sbcon-card-box-wrapper");
			const spacer = 0;
		
			let sbconheight = sbconpanels[0].offsetHeight + 120;
			sbconpanels.forEach((sbconpanel, i) => {
			ScrollTrigger.create({
				trigger: sbconpanel, 
				start: () => "top 100px", 
				endTrigger: '.sbcon-element-card-box-style-1', 
				end: `bottom top+=${sbconheight + (sbconpanels.length * spacer)}`,
				pin: true, 
				pinSpacing: false, 
			});
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(sbconpanels => sbconpanels.kill(true));
		}
	});
}

// function sbcon_sticky_special() {
// 	if (jQuery('.sbcon-sticky-col2-special').hasClass('.elementor-element-edit-mode')) {
// 		return;
// 	}
// 	ScrollTrigger.matchMedia({
// 		"(min-width: 1024px)": function() { 
// 			let sbcon_sticky_2 = jQuery(".sbcon-sticky-col2-special");
// 			let section = jQuery('.sbcon-sticky-special'); 
// 			let section_height = sbcon_sticky_2.height();
// 			const tweenOne = gsap.to(sbcon_sticky_2, {
// 				y: - (section_height - 600),
// 				scrollTrigger: {
// 				  trigger: section,
// 				  pin: section,
// 				  scrub: true,
// 				  start: "top top+=140px",
// 				  end: () => '+=' + (section_height - 600),
// 				}
// 			}); 
// 		},
// 		"(max-width:1024px)": function() {
// 			ScrollTrigger.getAll().forEach(section => section.kill(true));
// 		}
// 	}); 
// }

function sbcon_set_tooltip() {
    $('[data-cursor-tooltip]').each(function() {
        var thisele = $(this);
        var thisele_html = thisele.find('.pbminfotech-box-content').html();
        thisele.attr("data-cursor-tooltip", thisele_html);
    });
}

// function sbcon_staticbox_hover() {
// 	var sbcon_var = jQuery('.sbcon-element-static-box-style-1');
// 	if (!sbcon_var.length) {
// 		return;
// 	}
// 	sbcon_var.each(function() {
// 		var sbcon_Class = '.swiper-static-slide-nav .sbcon-hover-inner li ';
// 		jQuery(this)
// 			.find(sbcon_Class).first()
// 			.addClass('sbcon-active');
// 		jQuery(this)
// 			.find(sbcon_Class)
// 			.on('mouseover', function() {
// 				jQuery(this).addClass('sbcon-active').siblings().removeClass('sbcon-active');
// 			});
// 	});
// }

/* Static Box Slider */
// var sbcon_staticbox_hover_slide = function() {
// 	if (typeof Swiper !== 'undefined') {
// 		var sbcon_hover = new Swiper(".sbcon-hover-image-faded", {
// 			speed: 6000,
// 			effect: 'fade',
// 		});
// 		var sbcon_hover1 = new Swiper(".sbcon-hover-short-desc", {
// 			grabCursor: true,
// 			effect: "creative",
// 			creativeEffect: {
// 				prev: {
// 					translate: [0, "-170%", 1],
// 				},
// 				next: {
// 					translate: [0, "100%", 0],
// 				},
// 			},
// 			allowTouchMove: false
// 		});
// 		jQuery('.sbcon-main-static-slider li').on('mouseover', function(e) {
// 			e.preventDefault();
// 			var myindex = jQuery(this).index();
// 			sbcon_hover.slideTo(myindex, 1000, false);
// 			sbcon_hover1.slideTo(myindex, 500, false);
// 		});
// 	}
// }

// function sbcon_img_animation() {
// 	const boxes = gsap.utils.toArray('.sbcon-animation-style1,.sbcon-animation-style2,.sbcon-animation-style3,.sbcon-animation-style4,.sbcon-animation-style5,.sbcon-animation-style6,.sbcon-animation-style7');
// 	boxes.forEach(img => {
// 		gsap.to(img, {
// 			scrollTrigger: {
// 				trigger: img,
// 				start: "top 70%",
// 				end: "bottom bottom",
// 				toggleClass: "active",
// 				once: true,
// 			}
// 		});
// 	});
// }

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});

// on ready
jQuery(document).ready(function() {
	sbcon_animation_number_rotate();
	sbcon_title_animation();
	sbcon_verticel_layered_pinning();
	sbcon_multi_icon_box_hover_effect();
	sbcon_active_hover();
	sbcon_portfolio3_slider();
	sbcon_staticbox_hover_slide();
	sbcon_coverflow_testimonial();
	sbcon_scale_video();
	sbcon_hover_slide();
	// sbcon_staticbox_hover();
	// sbcon_staticbox_hover_slide();
});

// on resize
jQuery(window).resize(function() {
	sbcon_title_animation();
	sbcon_img_animation();
	sbcon_mousehover_tooltip();
});

// on load
jQuery(window).on('load', function(){
	// sbcon_sticky_special();
	sbcon_hover_img();
	sbcon_animate_custom_text();
	sbcon_img_animation();
	sbcon_tween_effect();
	sbcon_extend_section();
	sbcon_sticky();
	sbcon_card_verticel_pinning();
	
	jQuery('[data-magnetic]').each(function() { new Magnetic(this); });
	gsap.delayedCall(1, () =>
		ScrollTrigger.getAll().forEach((t) => {
			t.refresh();
		})
	);	
	
	setTimeout(cleaning, 500);
	function cleaning(){
		ScrollTrigger.refresh(); 
	}
});