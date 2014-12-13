Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
	console.log("Comparando ");
	console.log(lvalue);
	console.log(operator);
	console.log(rvalue);
	 
    var operators, result;
   
    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    }
    console.log('options === undefined');

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }
   console.log('operators = {');
    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };
   console.log(' if (!operators[operator])');
   
    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }
   
    result = operators[operator](lvalue, rvalue);
    console.log('result');
    console.log(result);
    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
 
});