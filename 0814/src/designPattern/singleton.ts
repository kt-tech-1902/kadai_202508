export {};

class Logger {
    private static instance: Logger;

    private constructor() {}

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    output(content: string) {
        const now = new Date();
        console.log(now);
    }
}

class Test {}

const run = () => {
    const test1 = new Test();
    const test2 = new Test();
    console.log(test1 === test2);

    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    console.log(logger1 == logger2);

    logger1.output("1");
    logger2.output("2");
};

run();
