import {
    f,
    f2,
    Rectangle,
    Square,
    Rectangle2,
    Square2,
} from "./liskovSubstitution";

describe("Rectangle Test", () => {
    test("Rectangle getArea", () => {
        const r1 = new Rectangle();
        expect(f(r1, 3, 4)).toBe(12);
    });
    test("Square getArea", () => {
        const r1 = new Square();
        expect(f(r1, 3, 4)).toBe(12);
    });
    test("Rectangle getArea", () => {
        const r1 = new Rectangle2();
        r1.setWidth(3);
        r1.setHeight(4);
        expect(f2(r1)).toBe(12);
    });
    test("Square getArea", () => {
        const r1 = new Square2();
        r1.setLength(3);
        expect(f2(r1)).toBe(9);
    });
});
