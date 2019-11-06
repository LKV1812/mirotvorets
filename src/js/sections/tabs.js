// var tabsWrap = document.getElementById('tabs-wrap');
// console.log(tabsWrap);
$(document).ready(function() {

	// TABS
	$(".tabs").click(function(e){
		e.preventDefault();
		$(".tabs").removeClass("tabs--active");
    $(this).addClass("tabs--active");
    $(".tabs__icon-circle").removeClass("tabs__icon-circle--active");
    $(this).children(".tabs__icon-circle").addClass("tabs__icon-circle--active");

    $(".section-toggle").removeClass("section-toggle--active");

    if($(this).attr("data-tab-1")) {
      $("#tab-content-1").addClass("section-toggle--active");
    }

    if($(this).attr("data-tab-2")) {
      $("#tab-content-2").addClass("section-toggle--active");
    }

    if($(this).attr("data-tab-3")) {
      $("#tab-content-3").addClass("section-toggle--active");
    }

  });

});
