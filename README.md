# screen-capture.js
ES代码截取HTML页面中的一部分为图片。

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

> 温馨提示：目前还只支持截取无替换元素的内联样式（研发阶段）。

如何使用？
--------------------------------------
```bash
npm install --save screen-capture.js
```

然后在需要的地方使用：

```js
import screenCapture from 'screen-capture.js';

// dom表示需要截图的结点
screenCapture(dom);
```

### 免责声明

*   项目中部分数据（如图片等）来自互联网，如果侵犯到对应权益者请联系我们，方便我们及时删除！
*   本项目保留贡献者全部权利，发生的任何纠纷，本项目作者和维护人概不负责，如有侵权，请及时和我们取得联系。