class Cap {
	public radius1: number;
	public height1: number;
	constructor(radius: number, height: number) {
		this.radius1 = radius;
		this.height1 = height;
	}
	getRadius(): number {
		return this.radius1;
	}
	getHeight(): number {
		return this.height1;
	}
}


class Stilpe {
	public radius: number;
	public height: number;
	constructor(radius: number, height: number) {
		this.radius = radius;
		this.height = height;
	}
	getRadius(): number {
		return this.radius;
	}
	getHeight(): number {
		return this.height;
	}
}
class Grip {
	public name: string;
	public type: string;
	public cap: Cap;
	public stilepe: Stilpe;

	constructor(name: string, type: string, cap: Cap, stilepe: Stilpe) {
		this.name = name;
		this.stilepe = stilepe;
		this.cap = cap;
		this.type = type;
	}

}
// const mushamor: Grip = new Grip('мухамор','мухаморный',new Cap(10,5),new Stilpe(2,50));
// const mushamor1: Grip = new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50));
// const mushamor2: Grip = new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50));
// const mushamor3: Grip = new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50));
// const mushamor4: Grip = new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50));
let arrGrip: Grip[] = [
	new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50)),
	new Grip('Рыжик', 'Рыжикный', new Cap(10, 34), new Stilpe(2, 50)),
	new Grip('Груздь', 'Груздный', new Cap(10, 10), new Stilpe(2, 50)),
	new Grip('Лисички', 'Лисичкный', new Cap(10, 50), new Stilpe(2, 50)),
	new Grip('Опята', 'Опятковый', new Cap(10, 50), new Stilpe(2, 50)),
	new Grip('Сыроежка', 'Сыроежковый', new Cap(10, 5), new Stilpe(2, 50)),
	new Grip('мухамФор', 'мухаморный', new Cap(10, 10), new Stilpe(2, 50)),
];

class Grips {
public arrGrip: Grip[] = [];
constructor(arrGrip: Grip[]){
	this.arrGrip = arrGrip;
}
getGrips(): void{
	arrGrip.forEach(x=> console.log(x));

}
}

arrGrip.map(item => console.log(item));
let a = arrGrip[0].cap.height1;
for(let item of arrGrip){
	if (a < item.cap.height1)
	{
	a = item.cap.height1;
	}
}
console.log(a);