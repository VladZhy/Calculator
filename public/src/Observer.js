export class CalculatorData {
    constructor() {
        this.numbers = [[], []];
        this.currentArray = 0;
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    setCalculatorData(numbers = this.numbers, currentArray = this.currentArray) {
        this.numbers = numbers;
        this.currentArray = currentArray;
        this.calculatorDataChanged();
    }

    pushNumberCalculatorData(number) {
        this.numbers[this.currentArray].push(number);
        this.calculatorDataChanged();
    }

    togglePositiveNegativeCalculatorData() {
        if (this.currentArray === 1 && this.numbers[1].length === 0) {
            if (this.numbers[0][0] !== '-') {
                this.numbers[0].unshift('-');
            } else if (this.numbers[0][0] === '-') {
                this.numbers[0].shift();
            }
        } else if (this.numbers[this.currentArray][0] !== '-' && this.numbers[this.currentArray].length > 0) {
            this.numbers[this.currentArray].unshift('-');
        } else if (this.numbers[this.currentArray][0] === '-' && this.numbers[this.currentArray].length > 0) {
            this.numbers[this.currentArray].shift();
        }
        this.calculatorDataChanged();
    }

    handlerEraseButtonCalculatorData() {
        if (this.currentArray === 1 && this.numbers[1].length === 0) {
            this.numbers[0].pop();
            this.currentArray = 0;
        } else {
            this.numbers[this.currentArray].pop();
        }
        this.calculatorDataChanged();
    }

    addDecimalSeparatorCalculatorData() {
        if (this.currentArray === 1 && this.numbers[1].length === 0 && !this.numbers[0].includes('.') && !this.checkIfNumberIsDecimal()) {
            this.currentArray = 0;
            this.numbers[0].push('.');
            this.calculatorDataChanged();
        } else if (this.numbers[this.currentArray].length > 0 && !this.numbers[this.currentArray].includes('.') && !this.checkIfNumberIsDecimal()) {
            this.numbers[this.currentArray].push('.');
            this.calculatorDataChanged();
        }
    }

    checkIfNumberIsDecimal() {
        let number = Number(this.numbers[this.currentArray].join(''));
        return (number - Math.floor(number)) !== 0 ? true : false;
    }

    calculatorDataChanged() {
        for (const listener of this.listeners) {
            listener.update(this.numbers, this.currentArray);
        }
    }
}

export class CurrentCalculatorDisplay {
    constructor(observable) {
        observable.addListener(this);
        this.output;
    }

    update(numbers, currentArray) {
        // Checks if the current array is the second and doesn't have any numbers
        if (currentArray === 1 && numbers[1].length === 0) {
            this.output = numbers[0].join('');
        } else {
            this.output = numbers[currentArray].join('');
        }
    }
}