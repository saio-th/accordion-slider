function accordionSlider(){var i=$(".slider-wrap"),t=i.find(".slider"),o=t.find(".index"),d=t.length,r=o.outerWidth(),f=i.width();function n(){for(var i=0;i<d;i++)t.eq(i).css({left:i*r,width:f-i*r})}$(window).on("resize",function(){f=i.width(),n()}),n(),o.on("click",function(){for(var i=o.index(this),n=f-r*(d-i-1),e=i;0<e;e--)t.eq(e).stop().animate({left:r*e},300,"swing");for(e=i;e<d;e++)t.eq(e+1).stop().animate({left:n+r*(e-i)},300,"swing")})}accordionSlider();
//# sourceMappingURL=maps/common.js.map