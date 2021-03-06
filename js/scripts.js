$(document).ready(function(){	





	
/***************************************************
		TOOLTIP & POPOVER
***************************************************/
$("[rel=tooltip]").tooltip();
$("[data-rel=tooltip]").tooltip();

/***************************************************
		CAROUSEL - STOP AUTO CYCLE
***************************************************/
 $('.carousel').carousel({
    interval: false});

/***************************************************
		HOVERS
***************************************************/
	$(".hover_img, .hover_colour").on('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.1},500);
		}
	);
	$(".hover_img, .hover_colour").on('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},800);
		}
	);
	
/***************************************************
		BACK TO TOP LINK
***************************************************/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})
	
	$('#getstarted').click(function(event) {
		event.preventDefault();
		 $('html, body').animate({
        scrollTop: $("#courses").offset().top
    }, 1000);})
	
});




/***************************************************
	ANIMATIONS
***************************************************/

$(function() { 	
$('.welcome').show().addClass("animated fadeInDown");
$('.welcome_index').show().addClass("animated fadeInDown");
$('.intro_sections h6').show().addClass("animated fadeInUp");
$('.fadeinup').show().addClass("animated fadeInUp");
$('.fadeindown').show().addClass("animated fadeInDown");
}); 


function increaseScore(howmuch) {
	$('#pointstotal').fadeOut(function () {
       $("#pointstotal").text(parseInt($("#pointstotal").text(),10)+howmuch);
		$('#pointstotal').fadeIn();
	});


}



/***************************************************
	TYPEAHEAD
***************************************************/
$(function() { 	
$('.typeahead').typeahead({
    source: function (query, process) {
        return $.get('/dcsite/country/typeahead', { query: query }, function (data) {
            return process(data.options);
        });
    }
});
});


/***************************************************
	DONATIONS BANNER
***************************************************/

$(function() { 	


if ($.cookie("noti") !== "closed") { // or you could just check for cookie existing

   $('.dropdown-notification').removeClass('hidden');
   $('.dropdown-notification').addClass('visible-desktop');
} 

// On button click close and add cookie (expires in 100 days)
$('.close').on('click', function(){
   $.cookie("noti", "closed", { expires : 1 });
   $('.dropdown-notification').addClass('hidden');
    $('.dropdown-notification').removeClass('visible-desktop');
    ga('send', 'event', 'button', 'click', 'patreonbannerclose');
})


$('#patreonbutton').on('click', function(){
   $.cookie("noti", "closed", { expires : 1 });
      $('.dropdown-notification').addClass('hidden');
    $('.dropdown-notification').removeClass('visible-desktop');
    ga('send', 'event', 'button', 'click', 'patreonopen');

});

$('.paypalform').on('click', function(){
   
    ga('send', 'event', 'button', 'click', 'paypalsubbuttonclick');

});

});



// Subscription Slider

$(function() { 
	
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
		
	}
});
$("#ex1").on("slide", function(slideEvt) {
	if(slideEvt.value=="0") {
	    $("#subamount").text("I'm not able to help right now.");	
	    $(".subchange").removeClass("alert-success").addClass("alert-danger");
	}
	else {
	$("#subamount").text("I would like to subscribe to Dave Conservatoire for $"+ slideEvt.value +" per month.");
	$(".subchange").removeClass("alert-danger").addClass("alert-success");
	}

});

$(".subbutton").on("click", function() {
	
if ($('#ex1').val()!=0) {
	
 ga('send', 'event', 'sub-button', 'click', 'paypalsubbuttonclick-'+$('#ex1').val());	
	
window.location.href = "https://www.paypal.com/cgi-bin/webscr?business=dave@daveconservatoire.org&cmd=_xclick-subscriptions&currency_code=USD&p3=1&t3=M&no_shipping=1&src=1&sra=1&a3="+$('#ex1').val()+"&item_name=Dave%20Conservatoire%20Subscription%20&return_url=http://www.daveconservatoire.org/thanks&cancel_return=http://www.daveconservatoire.org/subscribe";
} else {
	
	$('#suremodal').modal('show');
	}

})

$("#stillno").on("click", function() {

ga('send', 'event', 'sub-button', 'click', 'stillno');	

});

$("#onedollar").on("click", function() {

ga('send', 'event', 'sub-button', 'click', 'onedollar');	

});

});


