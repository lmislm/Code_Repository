# three.js_basicEx
three.js
### 结果
* 任务结果
![image](https://raw.githubusercontent.com/lmislm/three.js_basicEx/master/img/ife%E5%9B%BE%E5%83%8F%205.png)

### 过程
* Know how to use Renderer，Scene,Camera，
* renderer the canvas by three.js,[another example](https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter1/1.2.1.html#L24)
* Created an cuboid  x=1,y=2,z=3, which background color is black,
![image](https://github.com/lmislm/three.js_basicEx/blob/master/img/%E5%9B%BE%E5%83%8F%201.png?raw=true)
* created a TorusGeometry,use PerspectiveCamera,and exercise the different graph,
![image](https://raw.githubusercontent.com/lmislm/three.js_basicEx/master/img/torus%E5%9B%BE%E5%83%8F%203.png)
* created a Meterial,learn the basic of MeshLambertMaterial
![image](https://raw.githubusercontent.com/lmislm/three.js_basicEx/master/img/meterial%E5%9B%BE%E5%83%8F%204.png)
```javascript
var cube = new THREE.Mesh(new THREE.CubeGeometry(5,5,5),
	new THREE.MeshLambertMaterial({
		color: 0x00ff00,
	})
```
> lambertMeaterial have shadow and dark casue by illumination 有由于光照产生明暗、阴影效果而basicMetal没有



