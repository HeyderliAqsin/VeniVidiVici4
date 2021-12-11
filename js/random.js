addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneLuckyNumbers = document.querySelector(".fc-lucky-numbers span"),
		fortuneList = [
			"Sevgilim məndən pamada istədi mən bilmədən ona super kley verdim. 2 günder mənlə danışmır",
			"Xəstaxandakı bip-bip edən aparatı söndürdüm indi hamı rahat yatır.",
			"Hindli dönərçi öləndə oğluna nə vəsiyyət edib? Basdırma",
			"Çay içən adam qəndi yerə düşəndə nə deyir? Şəkərim düşdü",
			"Beli olmayan qardaşlar kimlərdir? NoBel qardaşları",
			"Fətəli xan öldürdüyü adamların qulağna nə deyib? Fatality",
			"Adın nədir? Eldar; El dardısa XL verək",
			"Ən çox qar yağan ölkə hansıdı? Bolqarıstan",
			"İ hərfi I hərfinə nə deyib? Deyəsən başın qaçıbaaa",
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			fortuneLuckyNumbers.innerHTML = fortune.luckyNumbers.join(", ");
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}