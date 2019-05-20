require('./normalize.css')
require('./main.css')

const { add, subtract } = require('./lib')

document.addEventListener('DOMContentLoaded', () => {
    // testing()
    add(1, 2)
    subtract(1, 2)


})

