function Counter(){
    let counter = 0, myVar;
    this.start = function(){
        myVar = setInterval(() => {
            counter++
        }, 1000)
    }
    this.stop = function(){
        clearInterval(myVar)
    }
    this.reset = function(){
        counter = 0
    }
    Object.defineProperty(this, 'counter', {
        get: function(){
            return counter
        }
    })
}

const counter = new Counter();
counter.start()


