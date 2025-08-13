/**
 * インターフェース分離の原則
 * 違反例
 */
export {};

interface Vehicle {
    name: string;
    color: string;
    start(): void;
    stop(): void;
    fly(): void;
}

class Airplane implements Vehicle {
    constructor(public name: string, public color: string) {}
    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
    fly() {
        console.log("fly!");
    }
}

class Car implements Vehicle {
    constructor(public name: string, public color: string) {}

    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
    fly() {
        // throw new Error("車は空を飛べません");
    }
}

function run() {
    const v1: Vehicle = new Airplane("AirBus", "white");
    const v2: Vehicle = new Car("Prius", "black");

    v1.fly();
    v2.fly();
}

run();

/**
 * インターフェース分離の原則
 * 原則に沿った形式
 */
interface IVehicle {
    name: string;
    color: string;
}

interface IMovable {
    start();
    stop();
}

interface IFlyable {
    fly();
}

class Airplane2 implements IVehicle, IMovable, IFlyable {
    constructor(public name: string, public color: string) {}
    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
    fly() {
        console.log("fly!");
    }
}

class Car2 implements IVehicle, IMovable {
    constructor(public name: string, public color: string) {}

    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
}

function run2() {
    const v1 = new Airplane("AirBus", "white");
    const v2 = new Car("Prius", "black");

    v1.fly();
    v2.start();
}

run2();
