//THIS IS CODE IS USED TO TEST YOUR FUNCTION...DO NOT MODIFY IN ANY WAY
var testFunction = function (functionToTest) {
    const passColor = '#00FF00'
    const failColor = '#FF0000'
    const fontSize = '12px'
    const tests = [
        { input: '1-800-HOLIDAY', expected: '18004654329' },
        { input: 'GIMMEPIZZA', expected: '4466374992' },
        { input: '(902)Lottery', expected: '9025688379' },
        { input: '!@#$%^&', expected: '' },
        { input: '', expected: '' },
        { input: null, expected: '' },
        { input: undefined, expected: '' }
    ]

    tests.forEach(test => {
        const displayInput = test.input === '' ? "''" : test.input
        const displayExpected = test.expected === '' ? "''" : test.expected

        try {
            const result = functionToTest(test.input)
            const displayResult = result === '' ? "''" : result
            result === test.expected
                ? console.log(`%cTEST PASSED for ${displayInput}`, `color: ${passColor}; font-size: ${fontSize};`)
                : console.log(`%cTEST FAILED for ${displayInput}\nExpected ${displayExpected} as result but got ${displayResult} instead`,`color: ${failColor}; font-size: ${fontSize};`)
            console.log('')
        } catch(err) {
            console.log(`%cTEST FAILED for ${displayInput}\nExpected ${displayExpected} as result but got an error instead\nError Message: ${err.message}`,`color: ${failColor}; font-size: ${fontSize};`)
            console.log('')
        }
    })
}
