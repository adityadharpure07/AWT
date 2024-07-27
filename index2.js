// CALLBACK :=> a function which is passed as an argument to another function.
let fun = () =>{
    console.log("in fun")
}

let fun1 = () =>{
    console.log("in fun1")
}
let fun2 = (x) => {
    x();
}

fun2(fun)
fun2(fun1)

var fun3 = (f) => {
    f();
} 
fun3(() => {console.log("Hello")})
