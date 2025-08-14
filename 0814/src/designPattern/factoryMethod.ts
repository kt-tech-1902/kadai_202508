import { extend } from "lodash";

export {};

abstract class CreditCard {
    constructor(public owner: string) {}

    getOwner(): string {
        return this.owner;
    }

    abstract getCardType(): string;
    abstract getAnnualCharge(): number;
}

class Platinum extends CreditCard {
    getCardType(): string {
        return "platinum";
    }

    getAnnualCharge(): number {
        return 30000;
    }
}

class Gold extends CreditCard {
    getCardType(): string {
        return "gold";
    }

    getAnnualCharge(): number {
        return 10000;
    }
}

abstract class CreditCardFactory {
    abstract createCreditCard(owner: string): CreditCard;
    abstract registerCreditCard(creditCard: CreditCard);

    create(owner: string): CreditCard {
        const creditCard = this.createCreditCard(owner);
        this.registerCreditCard(creditCard);
        creditCard;
        return creditCard;
    }
}

const creditCardDatabase = [];

class PlatinumCreditCardFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Platinum(owner);
    }
    registerCreditCard(creditCard: CreditCard) {
        creditCardDatabase.push(creditCard);
    }
}

class GoldCreditCardFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Gold(owner);
    }
    registerCreditCard(creditCard: CreditCard) {
        creditCardDatabase.push(creditCard);
    }
}

const run = () => {
    const platinumFactory = new PlatinumCreditCardFactory();
    const platinumCard = platinumFactory.create("kawa");

    const goldFactory = new GoldCreditCardFactory();
    const goldCard = goldFactory.create("yama");

    console.log(platinumCard);
    console.log(goldCard);

    console.log(creditCardDatabase);
};

run();
