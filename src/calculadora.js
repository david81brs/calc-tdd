function soma(a, b) {
    return a+b;
}

function subtrai(a, b){
    return a-b;
}

function multiplica(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b != 0) {
	return a/b;
    }
    else {
	return null;
    }
}
module.exports = {soma, subtrai, multiplica, divide};
