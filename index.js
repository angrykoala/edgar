// sweet_code.js
import { hi } from './macros/hello_macro.sjs'
import { + } from './macros/operators.sjs'

class OperatorTest{
    constructor(number){
        this.number=number;
    }
    add(otherThing){
        this.number=this.number+otherThing.number;
        return this
    }
}

let a=new OperatorTest(2)
let b=new OperatorTest(10)

console.log(a+b)
