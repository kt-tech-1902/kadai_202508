export {};

interface Component {
    getLogMessage(msg: string): string;
}

class Logger implements Component {
    getLogMessage(msg: string): string {
        return msg;
    }
}

abstract class Decorator implements Component {
    constructor(protected component: Component) {}

    abstract getLogMessage(msg: string): string;
}

class TimestampDecorator extends Decorator {
    getLogMessage(msg: string): string {
        const date = new Date();
        const timestamp = date.toLocaleString("ja-JP");

        return this.component.getLogMessage(timestamp);
    }
}

class LogLevelDecorator extends Decorator {
    constructor(component: Component, private logLevel: string) {
        super(component);
    }
    getLogMessage(msg: string): string {
        return this.component.getLogMessage(this.logLevel);
    }
}

const run = () => {
    const logger = new Logger();

    const logLevel = new LogLevelDecorator(logger, "info");
    const timestamp = new TimestampDecorator(logger);

    console.log(logger.getLogMessage("test"));
    console.log(logLevel.getLogMessage("test2"));
    console.log(timestamp.getLogMessage("test3"));
};

run();
