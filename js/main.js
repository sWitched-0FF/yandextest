$(document).ready(function(){
	var ratingvalue = $('.ratingsymbol.active').length;

	$('.ratingitem').hover(
		function(){
			$(this).find('.ratingsymbol').addClass('active');
			$(this).prevAll().find('.ratingsymbol').addClass('active');
			$(this).nextAll().find('.ratingsymbol').removeClass('active');
			},
		function(){
			$('.ratingitem').eq(ratingvalue).prevAll().find('.ratingsymbol').addClass('active');
			$('.ratingitem').eq(ratingvalue-1).nextAll().find('.ratingsymbol').removeClass('active');;
			}
		);
	$('.ratingitem').click(function(){
		ratingvalue = $(this).index()+1;
		console.log('you rate this '+ratingvalue);
		});

	$('.progressbar').attr('style','width:'+$('.progressvalue').text());

	$('.progresscontainer').mousedown(function(){
		$(this).addClass('moved');
		$('.progresscontainer').on('mousemove',function(event){
			changeProgress(event);
			});
		})
		.mouseup(function(){
			$(this).removeClass('moved');
			$('.progresscontainer').off('mousemove');
		});
	$('.progresscontainer').click(function(event){
		changeProgress(event);
		});

	$('.progressvalue').on('selectstart', false);
});

function changeProgress(event){
	var obProgress = $('.progresscontainer');
	var progressWidth = obProgress.width();
	var newProgress = Math.floor(((event.clientX-obProgress.position().left)/progressWidth)*100)+'%';
	obProgress.find('.progressvalue').text(newProgress);
	obProgress.find('.progressbar').attr('style','width:'+newProgress);
	}