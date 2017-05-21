module.exports = function main(str) {
    var sum = 0;
    var array = Array.from(str);
    return array.reduce((a, b) => parseInt(a )+ parseInt(b));
};
