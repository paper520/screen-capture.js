// 返回outHTML
export default function (dom) {

  var outhtml = dom.outerHTML || (function (n) {
    var div = document.createElement('div'),
      h;
    div.appendChild(n);
    h = div.innerHTML;
    div = null;
    return h;
  })(dom);

  // 因为是字符串里面的字符串，外部用的双引号，里面的双引号需要转义
  outhtml = outhtml.replace(/"/g, "&quot;");

  return outhtml;
};