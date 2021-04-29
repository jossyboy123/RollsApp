console.log('Learning Javascript');

function sum() {
    for (var i = 0, result = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
    //return arguments.length;
}
//var output = sum(2, 12, 1, 2, 12, 34, 23);
//var output = sum.call(null, 3, 4, 3);
var output = sum.apply(null, [3, 4, 3]);
//console.log(output);


// JavaScript global scope
var global_ten = 10;

function papa() {
    var hundred_more = 100;
    var sum = function(a, b) {
        return a + b + global_ten + hundred_more;
    };
    return sum(9, 11);
}
//console.log(papa()); // 130

var fns = [];

function definer_() {
    for (var i = 0; i < 5; i++) {
        fns.push(
            function(local_i) {
                return function() {
                    return local_i;
                };
            }(i) //localize the scope variable i
        )
    }
}

function binder(local_i) {
    return function() {
        return local_i;
    };
}

function definer() {
    for (var i = 0; i < 5; i++) {
        fns.push(
            binder(i)
        )
    }
}
//definer();
//console.log(fns[0]());
//console.log(fns[1]());
//console.log(fns[2]());
//console.log(fns[3]());
//console.log(fns[4]());
//prompt(true ? "Message available" : "Not defined");

//Sample
function localScoping() {
    var button = ['Gold', 'Frankinsense', 'Myrrh'];
    for (var i = 0; i < 3; i++) {
        console.log(`Clicking on the ${button[i]} button`);
        //document.getElementById('button-' + i).onclick = function() {
        //   console.log("This is button: " + i);
        // };
    }
}
//localScoping();


//Privacy in Immediate functions
//Image Rollovers

let RollOver = (function() {
    //Private data
    var next, rewind, previous, select_dom;
    var index = -1;
    var data = ['animals', 'flowers', 'buildings', 'vehicles'];
    var counter = data.length - 1;

    next = function() {
        if (index < counter) {
            index++;
        } else
            return rewind();
        return data[index];
    };

    previous = function() {
        if (index > 0) {
            index--;
        } else if (index == 0) {
            return rewind();
        } else
            return next();
        return data[index];
    };

    rewind = function() {
        if (index >= 0) {
            index = 0;
        } else
            return next();
        return data[index];
    };

    select_dom = function() {

    };

    this.init = function(next_button, previous_button, image_data, time) {
        data = ['cars', 'bikes', 'man', 'woman', 'nations', 'kingdoms'];
        counter = data.length - 1;
        //console.log(data);

        setInterval(function() {
            var roll = next();
            console.log("Displaying");
            console.log(roll);

        }, time);
    }

    return this;
})();
//console.log(RollOver.init(null, null, null, 2000));

class Animal {
    constructor(name) {
        this.name = `My name is ${name}`;
    }
    animalType() {
        return "Animal with legs";
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.legs = 4;
    }
    sayName() {
        return "Woof! " + super.animalType();
    }
    animalType() {
        return `Animals with ${this.legs} legs`;
    }
}

//let fido = new Dog("Fido");
//console.log(fido.name);
//console.log(fido.sayName());
//console.log(fido instanceof Animal);