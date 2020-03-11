const counter = (function () {
    let value = 0
    
    const add = () => {
        return ++value
    }
    const reset = () => {
        value = 0
    }

    return {
        add,
        reset
    }

})()

console.log(counter.add())