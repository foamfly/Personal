$('#navbarToggle').blur(function(event){
	var screenWidth = window.innerWidth;
	if (screenWidth < 768){
		$('#collapsable-nav').collapse('hide');
	}
})

/* affix the navbar after scroll below header */
$('#header-nav').affix({
      offset: {
        top: $('header').height()-$('#header-nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#header-nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#header-nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});
