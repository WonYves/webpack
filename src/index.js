import {add} from './add/add'
import {getArraySum} from './tool/tool'
console.log(getArraySum([1,2,3,4,5,6,7,8,9,10]));
console.log(add(3,4));


// 引入css文件
// webpack默认只识别js文件
// css引入后 被打包 等浏览器运行时 css样式生效
import './css/index.css' 
import './less/index.less'