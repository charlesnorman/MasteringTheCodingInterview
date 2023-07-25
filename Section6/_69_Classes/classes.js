// Referance Type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context vs scope
const object4 = {
    a: function () {
        console.log(this);
    }
}

object4.a();
// Instantiation

class Player {
    constructor(name, type) {
        console.log('In Player Constructor before assignments this:', this, '\n');
        this.name = name;
        this.type = type;
        console.log('In Player Constructor after assignments this:', this, '\n');
    }
    introduce() {
        console.log(`Hi I an ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('In Wizard Constructor ', this, '\n');
    }
    play(){
        console.log(`Weeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Charles', 'Warrier');
//const wizard2 = new Wizard('Judy', 'Healer');
//wizard1.introduce();
//wizard2.introduce();