"use strict";

// default // 'use strict'

console.log(this); // window

function checkThis() {
  console.log(this); // window // undefined
}

checkThis();

const anObject = {
  value: 0,
  checkThis() {
    console.log(this); // {value: 0, checkThis: f}
    function doit() {
      console.log(this); // window // undefined

      const asd = () => {
        console.log(this);
      };
      asd();
    }
    doit();

    const asdf = () => {
      console.log(this);
    };
    asdf();
  },
  checkThis2: () => {
    console.log(this); // windows
  },
};

anObject.checkThis();
anObject.checkThis2();

console.clear();

const obj2 = {
  count: 0,
  chekcThis() {
    console.log(this);

    function f() {
      console.log(this);
    }
    const g = () => {
      console.log(this);
    };
    f();
    g();
  },
  checkThis2: () => {
    console.log(this);

    function f() {
      console.log(this);
    }
    const g = () => {
      console.log(this);
    };
    f();
    g();
  },
  checkThis3: function () {
    console.log(this);

    function f() {
      console.log(this);
    }
    const g = () => {
      console.log(this);
    };
    const h = function () {
      console.log(this);
    };
    f();
    g();
    h();
  },
};

obj2.chekcThis();
obj2.checkThis2();
obj2.checkThis3();

console.clear();

function scope() {
  console.log(this);
  {
    console.log(this);
    {
      console.log(this);
      function f() {
        console.log(this);
      }
      const g = () => {
        console.log(this);
      };
      f();
      g();
    }
  }
}

scope();

console.clear();

scope.apply({ a: 1 });

console.clear();

const someone = {
  name: "sung",
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI();

const whoAmI = someone.whoAmI;
whoAmI(); // undefined

console.clear();

function Person(name, nickname) {
  this.name = name;
  this.nickname = nickname
  this.sayHi = function () {
    console.log(this.name, this.nickname, 'hello', this)
  }
}

Person.prototype.sayHello = function () {
  console.log('sayHello prototype')
  console.log(this.name, this.nickname, 'hello', this)
}

function sayHello(person) {
  console.log('sayHello function')
  const { name, nickname } = person
  console.log(name, nickname, 'hello', this)
}

const sung = new Person('sung', 'superpower')
const sung2 = new Person('sung', 'superpower')

console.log(sung.sayHi === sung2.sayHi) // false

sung.sayHello(); // this === {name: "sung", nickname: "superpower"}
sayHello(sung); // this === undefined 

class Human {
  constructor(name, nickname) {
    this.name = name;
    this.nickname = nickname
  }
  sayHello() {
    console.log(this.name, this.nickname, 'hello', this)
  }
}

const sun91 = new Human('sung1', 'super1');
const sun92 = new Human('sung2', 'super2');

console.log(sun91.sayHello === sun92.sayHello) // true