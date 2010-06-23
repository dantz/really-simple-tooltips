/*
 * jQuery really Simple Tooltips
 * version: 0.5
 * @requires jQuery v1.3.2 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * "Official" repository: http://github.com/nilsr/really-simple-tooltips
 * @author Nils Riedemann < nils.r at gmx dot com> http://beatsundbytes.de
 */

(function($){
	$.fn.tooltip = function(options) {
		var defaults = {
			classname: "tooltip",
			offset: 15,
			offset_x: 0,
			offset_y: 0,
			attribute: "title"
		};
			
		var options = $.extend(defaults,options);
		
		return this.each(function(){
			element = $(this);
			
			// Offsets festlegen
			if(options['offset_x'] == 0){ options['offset_x'] = options['offset']; }
			if(options['offset_y'] == 0){ options['offset_y'] = options['offset']; }
			
			element.hover(function(e){

				if($("#tooltip-margin").length) {
					// Tootip already present
				} else {
					this.t = $(this).attr(options["attribute"]);
					
					$(this).attr("title",null);
					
					// Tooltip erstellen
					$("body").append("<div id=\"rstooltip\"><div class=\"content\">"+this.t+"</div></div>");
					
					// Position festlegen
					var top_position = (e.pageY + options['offset_y']);
					var left_position = (e.pageX + options['offset_x']);
					
					// Nach Links ausrichten wenn's zu groß werden würde
					if ((e.pageX+options['offset_x']+$("#tooltip-margin").width()) > $("body").width()) {
						left_position = e.pageX - options['offset_x'] - $("#tooltip-margin").width();
					}
					
					// Positionieren
					$("#rstooltip").css({
						"position":"absolute",
						"top": top_position+"px",
						"left": left_position+"px"
					});
				}
				
			}, function() {
				this.title = this.t
				$("#rstooltip").remove();
			})
		});
	}
})(jQuery)
