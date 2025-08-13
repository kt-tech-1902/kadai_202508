/**
 * 単一責任の原則
 * 違反例
 */
export {};

class Employee {
    constructor(public name: string, public department: string) {}

    // 経理部門がアクター
    calculatePay() {
        this.getRegularHours();
        console.log(`${this.name}の給与を計算しました`);
    }

    // 人事部門がアクター
    reportHours() {
        this.getRegularHours();
        console.log(`${this.name}の労働時間をレポートしました`);
    }

    // データベース管理者がアクター
    save() {
        console.log(`${this.name}を保存しました`);
    }

    private getRegularHours() {
        // 仕様変更前
        // console.log("経理部門・人事部門共通のロジック");

        // 仕様変更後
        console.log("経理部門の仕様変更済み");
    }
}

function run() {
    const emp = new Employee("山田", "開発");

    console.log("");
    console.log("経理部門");
    emp.calculatePay();

    console.log("");
    console.log("人事部門");
    emp.reportHours();
}

run();

/**
 * 単一責任の原則
 * 原則に沿った形式
 */
class EmployeeData {
    constructor(public name: string, public department: string) {}
}

class PayCalculator {
    private getRegularHours() {
        console.log("給与計算");
    }

    calculatePay(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の給与`);
    }
}

class HourReporter {
    private getRegularHours() {
        console.log("労働時間計算");
    }

    reportHours(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の労働時間`);
    }
}

const run2 = () => {
    const employeeData = new EmployeeData("1人目", "開発");
    const payCalculator = new PayCalculator();
    const hourReporter = new HourReporter();

    console.log("経理部門");
    payCalculator.calculatePay(employeeData);
    console.log("");
    console.log("人事部門");
    hourReporter.reportHours(employeeData);
};

run2();
