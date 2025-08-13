/**
 * リスコフの置換原則
 * 違反例
 */
export {};

// スーパータイプ
export class Rectangle {
    width = 0;
    height = 0;

    setWidth(width: number) {
        this.width = width;
    }

    setHight(height: number) {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

// サブタイプ
export class Square extends Rectangle {
    setWidth(width: number) {
        super.setWidth(width);
        super.setHight(width); // なぜ？？
    }

    setHight(height: number) {
        super.setWidth(height); // なぜ？？
        super.setHight(height);
    }
}

export function f(r: Rectangle, width: number, height: number): number {
    r.setWidth(width);
    r.setHight(height);
    return r.getArea();
}

function run() {
    const r1: Rectangle = new Rectangle();
    const r2: Rectangle = new Square();

    console.log(f(r1, 3, 4));
    console.log(f(r2, 3, 4));
}

run();

/**
 * リスコフの置換原則
 * 原則に沿った形式
 */
interface IShape {
    getArea(): number;
}

export class Rectangle2 implements IShape {
    private width = 0;
    private height = 0;

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

export class Square2 implements IShape {
    private length = 0;

    setLength(length: number) {
        this.length = length;
    }

    getArea(): number {
        return this.length * this.length;
    }
}

export const f2 = (shape: IShape) => {
    console.log(shape.getArea());
    return shape.getArea();
};

function run2() {
    const r1 = new Rectangle2();
    r1.setWidth(3);
    r1.setHeight(4);
    f2(r1);

    const r2 = new Square2();
    r2.setLength(3);
    f2(r2);
}

run2();
