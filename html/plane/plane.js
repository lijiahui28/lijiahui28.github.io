const $ = selector => document.querySelector(selector);
const contentDiv = $('#contentDiv');
const startDiv = $('#startDiv');
const pauseDiv = $('#pauseDiv');
const endDiv = $('#endDiv');
const startBtn = $('#startBtn');
const continueBtn = $('#continueBtn');
const restartBtn = $('#restartBtn');
const restartBtn2 = $('#restartBtn2');
const homeBtn = $('#homeBtn');
const mainDiv = $('#mainDiv');
const markSpan = $('#mark');
const markP = $('#markP');
let tid = null;
let posY = 0;
let myPlane = null;
let scores = 0;

class BaseClass {
	constructor(x, y, width, height, src) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.img = null;
		this.init(src);
	}
	init(src) {
		this.img = document.createElement('img');
		mainDiv.appendChild(this.img);
		this.img.style.left = this.x + 'px';
		this.img.style.top = this.y + 'px';
		this.img.style.width = this.width + 'px';
		this.img.style.height = this.height + 'px';
		this.img.src = src;
	}
}

class MyPlane extends BaseClass {
	constructor(x, y) {
		super(x, y, 66, 80, 'image/我的飞机.gif');
	}
	move() {
		// mainDiv.addEventListener();
		addEvent(mainDiv, 'mousemove', moveAction);
	}
	stop() {
		removeEvent(mainDiv, 'mousemove', moveAction);
	}
	boom() {
		this.img.src = 'image/本方飞机爆炸.gif'
	}

}

function moveAction(e) {
	let evt = e || event;
	// let mouseX = evt.offsetX - myPlane.width/2;
	// let mouseY = evt.offsetY - myPlane.height/2;

	let mouseX = evt.clientX - contentDiv.offsetLeft - myPlane.width / 2;
	let mouseY = evt.clientY - contentDiv.offsetTop - myPlane.height / 2;

	myPlane.img.style.left = mouseX + 'px';
	myPlane.img.style.top = mouseY + 'px';

	// console.log(mouseX, mouseY);

	myPlane.x = mouseX;
	myPlane.y = mouseY;
}


// 敌方飞机的类
class Enemy extends BaseClass {
	constructor(x, y, width, height, src, sudu, hp, score, boomImg, dieTime) {
		super(x, y, width, height, src);
		this.sudu = sudu;
		this.hp = hp;
		this.score = score;
		this.boomImg = boomImg;
		this.planeIsDie = false;
		this.dieTime = dieTime;
		this.dieTimes = 0;
	}
	move() {
		let enemyTop = this.img.offsetTop;
		enemyTop += this.sudu;
		this.img.style.top = enemyTop + 'px';
		this.y = enemyTop;
	}

	boom() {
		this.img.src = this.boomImg;
	}
}

// 子弹的类
class Bullet extends BaseClass {
	constructor(x, y) {
		super(x, y, 6, 14, 'image/bullet1.png');
	}
	move() {
		let bulletTop = this.img.offsetTop;
		bulletTop -= 10;
		this.img.style.top = bulletTop + 'px';
		this.y = bulletTop;
	}
}


let mark = 0;
let enemys = [];
let bullets = [];
const timerAction = () => {
	// 1.背景移动
	posY++;
	mainDiv.style.backgroundPositionY = posY + 'px';

	// 2.创建敌方飞机&移动
	mark++;
	// 300ms创建一个小飞机
	if (mark % 15 == 0) {
		let tinyEnemy = new Enemy(Math.random() * (320 - 34), -24, 34, 24, 'image/enemy1_fly_1.png', Math.random() * 4 + 2, 1, 1000, 'image/小飞机爆炸.gif', 200);
		enemys.push(tinyEnemy);
	}
	// 1000ms创建中飞机
	if (mark % 51 == 0) {
		let midEnemy = new Enemy(Math.random() * (320 - 46), -60, 46, 60, 'image/enemy3_fly_1.png', Math.random() * 2 + 2, 4, 3000, 'image/中飞机爆炸.gif', 400);
		enemys.push(midEnemy);
	}


	// 6000ms创建大飞机
	if (mark % 301 == 0) {
		let largeEnemy = new Enemy(Math.random() * (320 - 110), -164, 110, 164, 'image/enemy2_fly_1.png', Math.random() * 2 + 1, 8, 10000, 'image/大飞机爆炸.gif', 600);
		enemys.push(largeEnemy);
	}

	enemys.forEach((item, index) => {


		if (item.y < 568 && item.dieTime != item.dieTimes) {
			!item.planeIsDie ? item.move() : item.dieTimes += 20;
		} else {
			// 飞出边界: 移除
			item.img.remove();
			enemys.splice(index, 1);
		}


		// if (item.y < 568) {
		// 	if (!item.planeIsDie) {
		// 		item.move();
		// 	}else {
		// 		item.dieTimes += 20;
		// 		if (item.dieTimes == item.dieTime) {
		// 			item.img.remove();
		// 			enemys.splice(index, 1);
		// 		}
		// 	}
		// }else {
		// 	// 飞出边界: 移除
		// 	item.img.remove();
		// 	enemys.splice(index, 1);
		// }
	});

	// 3.创建子弹&移动
	// 160ms
	if (mark % 5 == 0) {
		let bullet = new Bullet(myPlane.x + myPlane.width / 2 - 3, myPlane.y - 10);
		bullets.push(bullet);
	}
	bullets.forEach((item, index) => {
		if (item.y > -14) {
			item.move();
		} else {
			// 飞出边界: 移除
			item.img.remove();
			bullets.splice(index, 1);
		}
	});



	// 4.碰撞检测&得分逻辑
	caculator();
}


function caculator() {
	// 
	enemys.forEach((enemyItem, enemyIndex) => {
		// ----
		if (!enemyItem.planeIsDie) {
			// 我方飞机&敌机的碰撞检测
			let myLeft = myPlane.x;
			let myRight = myLeft + myPlane.width;
			let myTop = myPlane.y + 20;
			let myBottom = myTop - 25 + myPlane.height;

			let enemyLeft = enemyItem.x;
			let enemyRight = enemyLeft + enemyItem.width;
			let enemyTop = enemyItem.y;
			let enemyBottom = enemyTop + enemyItem.height;

			let shuiCon = (myRight > enemyLeft) && (myLeft < enemyRight);
			let chuiCon = (myTop < enemyBottom) && (myBottom > enemyTop);
			if (shuiCon && chuiCon) {
				// 我方飞机与敌机碰撞
				// 1.关闭定时器
				clearInterval(tid);
				// 2.我方飞机停止移动
				myPlane.stop();
				// 3.我方飞机爆炸
				myPlane.boom();
				// 4.显示结束页面
				endDiv.style.display = 'block';
				markP.innerHTML = scores;
			}

			// 子弹和敌机的碰撞检测
			bullets.forEach((bulletItem, bulletIndex) => {
				let bulletLeft = bulletItem.x;
				let bulletRight = bulletLeft + bulletItem.width;
				let bulletTop = bulletItem.y;
				let bulletBottom = bulletTop + bulletItem.height;
				let shuiCon = (bulletRight > enemyLeft) && (bulletLeft < enemyRight);
				let chuiCon = (bulletTop < enemyBottom) && (bulletBottom > enemyTop);
				if (shuiCon && chuiCon) {
					// 子弹打中飞机
					// 子弹消失
					bulletItem.img.remove();
					bullets.splice(bulletIndex, 1);
					if (enemyItem.hp > 0) {
						enemyItem.hp--;
						// 挨打
					} else {
						// 打死
						// 修改飞机的死亡状态
						enemyItem.planeIsDie = true;
						// 1.敌机爆炸
						enemyItem.boom();
						// 2.得分
						scores += enemyItem.score;
						markSpan.innerHTML = scores;
					}
				}

			});

		}

		// ----
	});
}


startBtn.onclick = function () {
	// 1.页面切换
	startDiv.style.display = 'none';
	mainDiv.style.display = 'block';

	// 2.创建我方飞机
	myPlane = new MyPlane(127, 468);
	myPlane.move();

	// 3.开启定时器
	tid = setInterval(timerAction, 20);
}

// 游戏暂停
mainDiv.oncontextmenu = function () {
	pauseDiv.style.display = 'block';
	clearInterval(tid);
	myPlane.stop();
	return false;
}

// 游戏继续
continueBtn.onclick = function () {
	pauseDiv.style.display = 'none';
	setTimeout(() => {
		myPlane.move();
		tid = setInterval(timerAction, 20);
	}, 200)
}

// 重新开始
restartBtn.onclick = function () {
	pauseDiv.style.display = 'none';
	setTimeout(() => {
		newPage();
		myPlane = new MyPlane(127, 468);
		tid = setInterval(timerAction, 20);
		myPlane.move();
	}, 200)
}

restartBtn2.onclick = function () {
	endDiv.style.display = 'none';
	setTimeout(() => {
		newPage();
		myPlane = new MyPlane(127, 468);
		tid = setInterval(timerAction, 20);
		myPlane.move();
	}, 200)
}


	// 回到主页
	homeBtn.onclick = function () {
		pauseDiv.style.display = 'none';
		newPage();
		mainDiv.style.display = 'none';
		startDiv.style.display = 'block';
	}

	// 封装事件监听的兼容写法
	function addEvent(dom, type, callBack) {
		if (addEventListener) {
			dom.addEventListener(type, callBack, false);
		} else {
			dom.attachEvent('on' + type, callBack);
		}
	}


	function removeEvent(dom, type, callBack) {
		if (addEventListener) {
			dom.removeEventListener(type, callBack, false);
		} else {
			dom.detachEvent('on' + type, callBack);
		}
	}

	function newPage() {
		myPlane.img.remove();
		bullets.forEach((item) => {
			item.img.remove()
		})
		enemys.forEach((item) => {
			item.img.remove()
		})
		bullets = [];
		enemys = [];
		scores = 0;
		mark=0;
		markSpan.innerHTML = '0';
	}


