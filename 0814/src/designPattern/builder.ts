export {};

class Computer {
    type: string;
    cpu: string;
    ram: number;
}

interface ComputerBuilder {
    addCpu(cpu: string): ComputerBuilder;
    addRam(ram: number): ComputerBuilder;
}

class DesktopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Desktop";
    }

    addCpu(cpu: string): DesktopBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    addRam(ram: number): DesktopBuilder {
        this.computer.ram = ram;
        return this;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class LaptopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Laptop";
    }

    addCpu(cpu: string): LaptopBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    addRam(ram: number): LaptopBuilder {
        this.computer.ram = ram;
        return this;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class Director {
    constructor(private builder: ComputerBuilder) {}

    // construct() {
    //     this.builder.addCpu("Core i5");
    //     this.builder.addRam(16);
    // }

    // highSpecConstruct() {
    //     this.builder.addCpu("Core i9");
    //     this.builder.addRam(64);
    // }
}

function run() {
    const desktopBuilder = new DesktopBuilder();
    desktopBuilder.addCpu("core i5").addRam(16);
    const desktopDirector = new Director(desktopBuilder);
    // desktopDirector.construct();
    const desktopComputer = desktopBuilder.getResult();
    console.log(desktopComputer);

    const laptopBuilder = new LaptopBuilder();
    laptopBuilder.addCpu("core i9").addRam(64);
    const laptopDirector = new Director(laptopBuilder);
    // laptopDirector.highSpecConstruct();
    const laptopComputer = laptopBuilder.getResult();
    console.log(laptopComputer);
}

run();
