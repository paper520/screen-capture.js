import screenCapture from '../src/index';

screenCapture(document.getElementById('test')).then(function (data) {
  console.log(data);
});