{"template":"component.html","title":"Touch","demo":"<style>\r\n\t.box { background: #00bcd4; color: #fff; text-align: center; }\r\n\r\n\t.container { background: #fff; border: 1px solid #455a64; height: 400px; margin: 20px 0; overflow: hidden; position: relative; width: 100%; }\r\n\r\n\t.register { height: 1px; left: 50%; position: absolute; top: 50%; width: 1px; }\r\n\t.box { height: 150px; line-height: 150px; left: -75px; position: absolute; top: -75px; width: 150px; }\r\n</style>\r\n\r\n<script>\r\n\t$(function() {\r\n\t\tvar $targets = $(\".touch\"),\r\n\t\t\t_minX = 0,\r\n\t\t\t_minY = 0;\r\n\r\n\t\t$targets.each(function() {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = {\r\n\t\t\t\t\t$container: $target.parents(\".container\"),\r\n\t\t\t\t\t$register:  $target.parents(\".register\")\r\n\t\t\t\t};\r\n\r\n\t\t\t$target.data(\"demo\", data);\r\n\t\t});\r\n\r\n\t\t// Pan\r\n\t\t$(\".pan\").touch({\r\n\t\t\tpan: true\r\n\t\t}).on(\"panstart\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\"),\r\n\t\t\t\toffset = data.$register.position();\r\n\r\n\t\t\tdata.origX = offset.left;\r\n\t\t\tdata.origY = offset.top;\r\n\r\n\t\t\tdata.diffWidth  = $target.outerWidth() / 2;\r\n\t\t\tdata.diffHeight = $target.outerHeight() / 2;\r\n\t\t})\r\n\t\t.on(\"panend\", function(e) {\r\n\t\t\t// ...\r\n\t\t});\r\n\r\n\t\t// Bubbling\r\n\r\n\t\t$(document).on(\"pan\", \".pan\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\"),\r\n\t\t\t\tx = data.origX + e.deltaX,\r\n\t\t\t\ty = data.origY + e.deltaY,\r\n\t\t\t\tminX = _minX + data.diffWidth,\r\n\t\t\t\tminY = _minY + data.diffHeight,\r\n\t\t\t\tmaxX = data.$container.outerWidth()  - minX - 2,\r\n\t\t\t\tmaxY = data.$container.outerHeight() - minY - 2;\r\n\r\n\t\t\tif (x < minX) {\r\n\t\t\t\tx = minX;\r\n\t\t\t}\r\n\t\t\tif (x > maxX) {\r\n\t\t\t\tx = maxX;\r\n\t\t\t}\r\n\t\t\tif (y < minY) {\r\n\t\t\t\ty = minY;\r\n\t\t\t}\r\n\t\t\tif (y > maxY) {\r\n\t\t\t\ty = maxY;\r\n\t\t\t}\r\n\r\n\t\t\tdata.$register.css({\r\n\t\t\t\tleft: x,\r\n\t\t\t\ttop:  y\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\t// Scale\r\n\t\t$(\".scale\").touch({\r\n\t\t\tscale: true\r\n\t\t}).on(\"scalestart\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\"),\r\n\t\t\t\toffset = $target.position();\r\n\r\n\t\t\tdata.origWidth  = $target.outerWidth();\r\n\t\t\tdata.origHeight = $target.outerHeight();\r\n\t\t})\r\n\t\t.on(\"scaleend\", function(e) {\r\n\t\t\t// ...\r\n\t\t})\r\n\t\t.on(\"scale\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\")\r\n\t\t\t\twidth  = data.origWidth  * e.scale,\r\n\t\t\t\theight = data.origHeight * e.scale,\r\n\t\t\t\tminWidth  = 150,\r\n\t\t\t\tminHeight = 150,\r\n\t\t\t\tmaxH = data.$container.outerHeight(),\r\n\t\t\t\tmaxW = data.$container.outerWidth(),\r\n\t\t\t\tmaxWidth  = (maxH > maxW) ? maxW : maxH,\r\n\t\t\t\tmaxHeight = (maxH > maxW) ? maxW : maxH;\r\n\r\n\t\t\tif (width < minWidth) {\r\n\t\t\t\twidth = minWidth;\r\n\t\t\t}\r\n\t\t\tif (width > maxWidth) {\r\n\t\t\t\twidth = maxWidth;\r\n\t\t\t}\r\n\r\n\t\t\tif (height < minHeight) {\r\n\t\t\t\theight = minHeight;\r\n\t\t\t}\r\n\t\t\tif (height > maxHeight) {\r\n\t\t\t\theight = maxHeight;\r\n\t\t\t}\r\n\r\n\t\t\t$target.css({\r\n\t\t\t\twidth:  width,\r\n\t\t\t\theight: height,\r\n\t\t\t\tlineHeight: height + \"px\",\r\n\t\t\t\tleft: -(width / 2),\r\n\t\t\t\ttop:  -(height / 2)\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\t// Manipulate\r\n\t\t$(\".manipulate\").touch({\r\n\t\t\tpan: true,\r\n\t\t\tscale: true\r\n\t\t}).on(\"scalestart\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\"),\r\n\t\t\t\toffset = data.$register.position();\r\n\r\n\t\t\tdata.origX = offset.left;\r\n\t\t\tdata.origY = offset.top;\r\n\r\n\t\t\tdata.origWidth  = $target.outerWidth();\r\n\t\t\tdata.origHeight = $target.outerHeight();\r\n\t\t})\r\n\t\t.on(\"scaleend\", function(e) {\r\n\t\t\t// ...\r\n\t\t})\r\n\t\t.on(\"scale\", function(e) {\r\n\t\t\tvar $target = $(this),\r\n\t\t\t\tdata = $target.data(\"demo\")\r\n\t\t\t\twidth  = data.origWidth  * e.scale,\r\n\t\t\t\theight = data.origHeight * e.scale,\r\n\t\t\t\t// pan\r\n\t\t\t\tx = data.origX + e.deltaX,\r\n\t\t\t\ty = data.origY + e.deltaY,\r\n\t\t\t\tminX = _minX,\r\n\t\t\t\tminY = _minY,\r\n\t\t\t\tmaxX = data.$container.outerWidth()  - minX,\r\n\t\t\t\tmaxY = data.$container.outerHeight() - minY,\r\n\t\t\t\t// scale\r\n\t\t\t\tminWidth  = 150,\r\n\t\t\t\tminHeight = 150,\r\n\t\t\t\tmaxWidth = 600,\r\n\t\t\t\tmaxHeight = 600;\r\n\r\n\t\t\tif (x < minX) {\r\n\t\t\t\tx = minX;\r\n\t\t\t}\r\n\t\t\tif (x > maxX) {\r\n\t\t\t\tx = maxX;\r\n\t\t\t}\r\n\t\t\tif (y < minY) {\r\n\t\t\t\ty = minY;\r\n\t\t\t}\r\n\t\t\tif (y > maxY) {\r\n\t\t\t\ty = maxY;\r\n\t\t\t}\r\n\r\n\t\t\tdata.$register.css({\r\n\t\t\t\tleft: x,\r\n\t\t\t\ttop:  y\r\n\t\t\t});\r\n\r\n\t\t\tif (width < minWidth) {\r\n\t\t\t\twidth = minWidth;\r\n\t\t\t}\r\n\t\t\tif (width > maxWidth) {\r\n\t\t\t\twidth = maxWidth;\r\n\t\t\t}\r\n\r\n\t\t\tif (height < minHeight) {\r\n\t\t\t\theight = minHeight;\r\n\t\t\t}\r\n\t\t\tif (height > maxHeight) {\r\n\t\t\t\theight = maxHeight;\r\n\t\t\t}\r\n\r\n\t\t\t$target.css({\r\n\t\t\t\twidth:  width,\r\n\t\t\t\theight: height,\r\n\t\t\t\tlineHeight: height + \"px\",\r\n\t\t\t\tleft: -(width / 2),\r\n\t\t\t\ttop:  -(height / 2)\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n</script>\r\n\r\n<h4>Pan</h4>\r\n<div class=\"container\">\r\n\t<div class=\"register\">\r\n\t\t<div class=\"box touch pan\">Pan</div>\r\n\t</div>\r\n</div>\r\n\r\n<h4>Scale</h4>\r\n<div class=\"container\">\r\n\t<div class=\"register\">\r\n\t\t<div class=\"box touch scale\">Scale</div>\r\n\t</div>\r\n</div>\r\n\r\n<h4>Manipulate</h4>\r\n<div class=\"container\">\r\n\t<div class=\"register\">\r\n\t\t<div class=\"box touch manipulate\">Scale &amp; Pan</div>\r\n\t</div>\r\n</div>","asset_root":"../"}

 #Touch Demo