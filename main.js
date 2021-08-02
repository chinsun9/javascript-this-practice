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
    }
    doit();
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
};

obj2.chekcThis();
obj2.checkThis2();

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
