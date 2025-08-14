export {};

interface Target {
    getCsvData(): string;
}

class NewLibrary {
    getJsonData() {
        return [
            { id: 1, data: 100 },
            { id: 2, data: 200 },
        ];
    }
}

// 継承を使用した形
class JsonToCsvAdapter extends NewLibrary implements Target {
    getCsvData(): string {
        const jsonData = this.getJsonData();

        const header = Object.keys(jsonData[0]).join(",") + "\n";
        const body = jsonData
            .map((d) => {
                return Object.keys(d)
                    .map((key) => d[key])
                    .join(",");
            })
            .join("\n");

        return header + body;
    }
}

// 委譲の形
class JsonToCsvAdapter2 implements Target {
    constructor(private adaptee: NewLibrary) {}
    getCsvData(): string {
        const jsonData = this.adaptee.getJsonData();

        const header = Object.keys(jsonData[0]).join(",") + "\n";
        const body = jsonData
            .map((d) => {
                return Object.keys(d)
                    .map((key) => d[key])
                    .join(",");
            })
            .join("\n");

        return header + body;
    }
}

const run = () => {
    const adaptee = new NewLibrary();
    console.log(adaptee.getJsonData());

    const adapter = new JsonToCsvAdapter();
    console.log(adapter.getCsvData());

    const adapter2 = new JsonToCsvAdapter2(adaptee);
    console.log(adapter2.getCsvData());
};

run();
