import xhtml from 'xhtml.js';
import outhtml from './outhtml';

export default function (dom) {

  var unique = new Date().valueOf() + "-" + (Math.random(1) * 100).toFixed(0);

  var size = {
    "width": dom.offsetWidth,
    "height": dom.offsetHeight
  };

  var template = outhtml(dom);

  // 追加图片
  xhtml(document.getElementsByTagName('body')).append('<img '
    + 'id="img-' + unique + '" '
    + 'width="' + size.width + '" '
    + 'height="' + size.height + '" '
    + 'src="data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\'><foreignObject '
    + 'width=\'' + size.width + '\' '
    + 'height=\'' + size.height + '\' '
    + '><body xmlns=\'http://www.w3.org/1999/xhtml\'>' +
    template +
    '</body></foreignObject></svg>" />');

  xhtml(document.getElementById('img-' + unique)).css({
    "position": 'fixed',
    "top": "20000px",
    "left": "20000px"
  });

  var promise = new Promise(function (resolve, refused) {

    var timeout = window.setTimeout(function () {

      // 准备画布
      var canvas = xhtml('canvas')[0];
      var painter = canvas.getContext('2d');

      // 绘制
      painter.drawImage(document.getElementById('img-' + unique), 0, 0);

      // 删除图片
      xhtml(document.getElementById('img-' + unique)).remove();

      window.clearTimeout(timeout);

      // 回调
      resolve(canvas.toDataURL());

    }, 100);

  });

  return promise;

};

