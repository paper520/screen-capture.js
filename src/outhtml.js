// 返回outHTML
export default function (dom) {
  return dom.outerHTML || (function (n) {
    var div = document.createElement('div'),
      h;
    div.appendChild(n);
    h = div.innerHTML;
    div = null;
    return h;
  })(dom);
};