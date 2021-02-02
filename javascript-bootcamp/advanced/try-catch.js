const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const reult = getTip(10)
    console.log(reult);
} catch (error) {
    console.log('catch block is runing');
}