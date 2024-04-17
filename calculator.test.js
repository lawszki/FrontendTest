const calculator = require('./calculator');
test('Calculator', () => {
    let expected = 2;
    let actual = calculator.add(1,1);
    expect(actual).toBe(expected);
})