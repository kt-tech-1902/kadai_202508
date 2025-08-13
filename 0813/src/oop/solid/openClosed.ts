/**
 * オープンクローズドの原則
 * 違反例
 */
export {};

// 従業員の職位
type Grade = "junior" | "middle" | "senior";

class Employee {
    constructor(public name: string, public grade: Grade) {}
}

class BonusCalculator {
    constructor(public base: number) {}

    getBonus(employee: Employee): number {
        if (employee.grade === "junior") {
            return Math.floor(this.base * 1.1);
        } else if (employee.grade === "middle") {
            return Math.floor(this.base * 1.5);
        } else if (employee.grade === "senior") {
            return Math.floor(this.base * 2);
        } else {
            return Math.floor(this.base * 3);
        }
    }
}

function run() {
    const emp1 = new Employee("Yamada", "junior");
    const emp2 = new Employee("Suzuki", "middle");
    const emp3 = new Employee("Tanaka", "senior");

    const bonusCalculator = new BonusCalculator(100);

    console.log(bonusCalculator.getBonus(emp1));
    console.log(bonusCalculator.getBonus(emp2));
    console.log(bonusCalculator.getBonus(emp3));
}

run();

/**
 * オープンクローズドの原則
 * 原則に沿った形式
 */
interface IEmployee {
    name: string;
    getBonus(base: number): number;
}

class JuniorEmployee implements IEmployee {
    constructor(public name: string) {}

    getBonus(base: number): number {
        return Math.floor(base * 1.1);
    }
}

class MiddleEmployee implements IEmployee {
    constructor(public name: string) {}

    getBonus(base: number): number {
        return Math.floor(base * 1.5);
    }
}

class SeniorEmployee implements IEmployee {
    constructor(public name: string) {}

    getBonus(base: number): number {
        return Math.floor(base * 2);
    }
}

// 追加実装
class ExpertEmployee implements IEmployee {
    constructor(public name: string) {}

    getBonus(base: number): number {
        return Math.floor(base * 3);
    }
}

const run2 = () => {
    const emp1 = new JuniorEmployee("first");
    const emp2 = new MiddleEmployee("second");
    const emp3 = new SeniorEmployee("third");
    const emp4 = new ExpertEmployee("forth"); // 追加実装

    const base = 100;

    console.log(emp1.getBonus(base));
    console.log(emp2.getBonus(base));
    console.log(emp3.getBonus(base));
    console.log(emp4.getBonus(base)); // 追加実装
};

run2();
