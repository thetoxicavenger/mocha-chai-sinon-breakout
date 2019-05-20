module.exports = {
    add: function (numOne, numTwo) {
        if (typeof numOne !== "number") {
            return false
        }
        return numOne + numTwo
    },
    subtract: function (numOne, numTwo) {
        return numOne - numTwo
    }
}