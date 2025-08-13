/**************
 * クラス図を元にコーディング
 **************/
class Employee {
    private id: number;
    private name: string;
    private salary: number;

    work = () => {
        console.log("start work");
    };

    protected getSalary = (): number => {
        return this.salary;
    };

    protected setSalary = (salary: number) => {
        this.salary = salary;
    };
}

/**************
 * クラス図を元にコーディング２
 **************/
class Client {
    private shape: Shape;
}

interface Shape {
    calcArea: () => {};
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    calcArea = (): number => {
        return this.width * this.height;
    };
}

class Circle implements Shape {
    private radius: number;

    calcArea = (): number => {
        return this.radius * this.radius * Math.PI;
    };
}
