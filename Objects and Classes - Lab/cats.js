function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catInfo of array) {
        let [name, age] = catInfo.split(' ');
        let cats = new Cat(name, age);
        cats.meow();
    }

}

cats(['Mellow 2', 'Tom 5']);
console.log('...........');
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);