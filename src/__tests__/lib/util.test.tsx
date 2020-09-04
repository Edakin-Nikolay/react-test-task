import {calcFinalSalary, splitIntoDigits} from "../../lib/util";

it('test calc final salary if tax true', () => {
    const amount: number = 40000;
    const personalTax: boolean = true;
    const result: object = {
        salary: 40000,
        tax: 5977,
        employeeCost: 45977
    }
    expect(calcFinalSalary(amount, personalTax)).toEqual(result);
});

it('test calc final salary if tax false', () => {
    const amount: number = 40000;
    const personalTax: boolean = false;
    const result: object = {
        salary: 34800,
        tax: 5200,
        employeeCost: 40000
    }
    expect(calcFinalSalary(amount, personalTax)).toEqual(result);
});

it('test split number into digits', () => {
    expect(splitIntoDigits(1)).toEqual('1');
    expect(splitIntoDigits(100)).toEqual('100');
    expect(splitIntoDigits(10000)).toEqual('10 000');
    expect(splitIntoDigits(1000000)).toEqual('1 000 000');
    expect(splitIntoDigits(10000000)).toEqual('10 000 000');
})
