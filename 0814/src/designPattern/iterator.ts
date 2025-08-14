import { iteratee } from "lodash";

export {};

class Patient {
    constructor(public id: number, public name: string) {}
}

interface IIterator {
    hasNext(): boolean;
    next();
}

interface Aggregate {
    getIterator(): IIterator;
}

class WaitingRoom implements Aggregate {
    private patients: Patient[] = [];

    getPatients(): Patient[] {
        return this.patients;
    }

    getCount(): number {
        return this.patients.length;
    }

    checkIn(patient: Patient): void {
        this.patients.push(patient);
    }

    getIterator(): IIterator {
        return new WaitingRoomIterator(this);
    }
}

class WaitingRoomIterator implements IIterator {
    // private position: number = 0

    constructor(private aggregate: WaitingRoom, private position = 0) {}

    hasNext(): boolean {
        return this.position < this.aggregate.getCount();
    }

    next() {
        if (!this.hasNext()) {
            console.log("患者がいない");
            return;
        }

        const patient = this.aggregate.getPatients()[this.position];
        this.position++;
        return patient;
    }
}

const run = () => {
    const waitingRoom = new WaitingRoom();
    waitingRoom.checkIn(new Patient(1, "yama"));
    waitingRoom.checkIn(new Patient(2, "kawa"));
    waitingRoom.checkIn(new Patient(3, "saka"));

    const iterator = waitingRoom.getIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
};

run();
