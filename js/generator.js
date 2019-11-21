class Generator {
    constructor() {
        this.dictionary;
    }
    generate(odd_and_even, order, unique, interval) {
        this.dictionary = "";
        if (unique == 0) { // Уникальные
            if (order == 0) { // По возрастанию
                if (odd_and_even == 0) { // Четные и нечетные
                    for (let i = 0; i < interval * 1024 - 1; i += interval) {
                        this.dictionary += i.toString(16) + '\n';
                    }
                }
                else if (odd_and_even == 1) { // Четные
                    for (let i = 0; i < 2048; i++) {
                        if (i % 2 == 0) {
                            this.dictionary += i.toString(16) + '\n';
                        }
                    }
                }
                else { // Нечетные
                    for (let i = 0; i < 2048; i++) {
                        if (i % 2 == 1) {
                            this.dictionary += i.toString(16) + '\n';
                        }
                    }
                }
            }
            else { // По убыванию
                if (odd_and_even == 0) { // Четные и нечетные
                    for (let i = interval * 1024 - 1; i >= 0; i -= interval) {
                        this.dictionary += i.toString(16) + '\n';
                    }
                }
                else if (odd_and_even == 1) { // Четные
                    for (let i = 2047; i >= 0; i--) {
                        if (i % 2 == 0) {
                            this.dictionary += i.toString(16) + '\n';
                        }
                    }
                }
                else { // Нечетные
                    for (let i = 2047; i >= 0; i--) {
                        if (i % 2 == 1) {
                            this.dictionary += i.toString(16) + '\n';
                        }
                    }
                }
            }
        }
        else if (unique == 1) { // Случайные
            if (odd_and_even == 0) { // Четные и нечетные
                for (let i = 0; i < 1024; i++) {
                    this.dictionary += this.randomIntFromRange(0, 65536).toString(16) + '\n';
                }
            }
            else if (odd_and_even == 1) { // Четные
                for (let i = 0; i < 1024; i++) {
                    while (true) {
                        let x = this.randomIntFromRange(0, 65536);
                        if (x % 2 == 0) {
                            this.dictionary += x.toString(16) + '\n';
                            break;
                        }
                    }
                }
            }
            else { // Нечетные
                for (let i = 0; i < 1024; i++) {
                    while (true) {
                        let x = this.randomIntFromRange(0, 65536);
                        if (x % 2 == 1) {
                            this.dictionary += x.toString(16) + '\n';
                            break;
                        }
                    }
                }
            }
        }

        return this.dictionary;
    }

    getDictionary() {
        return this.dictionary;
    }

    setDictionary(data) {
        this.dictionary = data;
    }

    addIndent() {
        if (!this.dictionary.endsWith("\n")) {
            this.dictionary += "\n";
        }
    }

    randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}