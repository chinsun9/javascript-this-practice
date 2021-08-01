'use strict'

// default // 'use strict'

console.log(this) // window

function checkThis() {
    console.log(this) // window // undefined
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
    }
}

anObject.checkThis();
anObject.checkThis2();
