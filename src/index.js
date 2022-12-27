import {add} from './add/add'
import {getArraySum} from './tool/tool'
console.log(getArraySum([1,2,3,4,5,6,7,8,9,10]));
console.log(add(3,4));


// 引入css文件
// webpack默认只识别js文件
// css引入后 被打包 等浏览器运行时 css样式生效
import './css/index.css' 
// less
import './less/index.less'

// webpack打包图片
import image from '../assets/images/1.gif'
let theImg = document.createElement('img')
theImg.src = image
document.body.appendChild(theImg)

// 打包字体文件
import '../assets/fonts/iconfont.css'
let theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild(theI)