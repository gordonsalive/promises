
functionWithCallback = (param, func) => {
    console.log('about to call func with ' + param);
    func(param);
};

const fool = 'fool';
console.log('starting program, input = ' + fool);

async function foo() {
    console.log('about to await Promise, resolving with my callback method');
    const result = await new Promise((resolve) => {
        functionWithCallback(fool, (input) => {
            console.log('about to resolve input = ' + input);
            resolve(input);
        });

    });
    // process result
    console.log('result was ' + result);

    // return some value based on result
    return result;
}
console.log('about to call foo...');
const output = foo().then((output) => {console.log('.then() output = '+ output); return output});
console.log('in-line output = ' + output);

const fun = async () => {
    const output2 = await foo();
    console.log('await in-line output = ' + output2);    
    return output2;
};

fun().then((finalvalue) => {
    console.log('final value = ' + finalvalue);
});

