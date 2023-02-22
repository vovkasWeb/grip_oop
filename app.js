"use strict";
class Cap {
    constructor(radius, height) {
        this.radius1 = radius;
        this.height1 = height;
    }
    getRadius() {
        return this.radius1;
    }
    getHeight() {
        return this.height1;
    }
}
class Stilpe {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getRadius() {
        return this.radius;
    }
    getHeight() {
        return this.height;
    }
}
class Grip {
    constructor(name, type, cap, stilepe) {
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
let arrGrip = [
    new Grip('мухамор', 'мухаморный', new Cap(10, 5), new Stilpe(2, 50)),
    new Grip('Рыжик', 'Рыжикный', new Cap(10, 34), new Stilpe(2, 50)),
    new Grip('Груздь', 'Груздный', new Cap(10, 10), new Stilpe(2, 50)),
    new Grip('Лисички', 'Лисичкный', new Cap(10, 50), new Stilpe(2, 50)),
    new Grip('Опята', 'Опятковый', new Cap(10, 50), new Stilpe(2, 50)),
    new Grip('Сыроежка', 'Сыроежковый', new Cap(10, 5), new Stilpe(2, 50)),
    new Grip('мухамФор', 'мухаморный', new Cap(10, 10), new Stilpe(2, 50)),
];
arrGrip.map(item => console.log(item));
let a = arrGrip[0].cap.height1;
for (let item of arrGrip) {
    if (a < item.cap.height1) {
        a = item.cap.height1;
    }
}
console.log(a);
