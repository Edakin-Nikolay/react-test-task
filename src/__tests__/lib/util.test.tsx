import {calcFinalSalary} from "../../lib/util";

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
