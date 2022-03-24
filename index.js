function receivesAFunction(callFunc){
    return callFunc()
}

function returnsANamedFunction(){
    return (function namedFunc(){
        console.log("This is a named function")
    })
}

function returnsAnAnonymousFunction(){
    return (() => console.log("This is an anonymous function"))
}