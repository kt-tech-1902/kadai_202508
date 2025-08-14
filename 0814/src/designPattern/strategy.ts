export {};

interface SortStrategy {
    sort(list: number[]): number[];
}

class BubbleSort implements SortStrategy {
    sort(list: number[]): number[] {
        console.log("BubbleSort");
        return bubbleSort(list);
    }
}

class InsertionSort implements SortStrategy {
    sort(list: number[]): number[] {
        console.log("InsertionSort");
        return insertionSort(list);
    }
}

class SortContext {
    constructor(private strategy: SortStrategy) {}

    sort(list: number[]): number[] {
        return this.strategy.sort(list);
    }
}

function run() {
    const list1 = [4, 2, 5, 1, 7, 6, 3];
    const strategy1 = new BubbleSort();
    const context1 = new SortContext(strategy1);
    console.log(context1.sort(list1));

    const list2 = [4, 2, 5, 1, 7, 6, 3];
    const strategy2 = new InsertionSort();
    const context2 = new SortContext(strategy2);
    console.log(context2.sort(list2));
}

run();

export function bubbleSort(list: number[]): number[] {
    for (let outer = 0; outer < list.length - 1; outer++) {
        for (let i = list.length - 1; i > outer; i--) {
            if (list[i] < list[i - 1]) {
                let tmp = list[i];
                list[i] = list[i - 1];
                list[i - 1] = tmp;
            }
        }
    }
    return list;
}

export function insertionSort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
        let tmp = list[i];
        if (list[i - 1] > tmp) {
            let j = i;
            while (j > 0 && list[j - 1] > tmp) {
                list[j] = list[j - 1];
                j--;
            }
            list[j] = tmp;
        }
    }
    return list;
}
