function Heartmouse(c = "heart",i = "12",dpi = "30",d = "700",r = "40") {
  var _default = {
    class:c,
    items:i,
    degperitem:dpi,
    duration:d,
    radius:r
  };
  $(document).ready(function () {
		$('body').append("<div class='"+_default.class+"'></>");
		if(isExist('.'+_default.class)){
			$('.'+_default.class).append('<div class="heart-icon"></div>')
		}
		$(document).mousemove(function (e) {
				var mousex = e.clientX;
				var mousey = e.clientY;
				setTimeout(() => {
				$('.'+_default.class).css({"top":mousey,"left":mousex});
				}, 20);
		})
		$(document).click(function (e) { 
			$('div.partical-box').remove();
			if(isExist('.'+_default.class)){
				$('.'+_default.class).append('<div class="partical-box" style="transform:translate(-50%,-50%);width:15px;height:15px"></div>');
				for (let index = 0; index < _default.items; index++) {
				$('div.partical-box').append('<div class="partical"></div>');
				$('div.partical').eq(index).css({transform:'rotate('+(index)*_default.degperitem+'deg)'});
				}
				$('.partical').each(function (e) {
						$(this).append('<div class="partical-clone" style="rotate:'+((-e*_default.degperitem)+45)+'deg"></div>');
				})
				$('div.partical-clone').animate({top:_default.radius,left:_default.radius},_default.duration,function () {
						$('div.partical-box').remove();
				});
			}
		});
  })
}