export const calcFinalSalary:
    (amount: number, personalTax: boolean) => {salary: number, tax: number, employeeCost: number} =
    (amount: number, personalTax: boolean) => {
    if (personalTax) {
        const amountWithTax = Math.round(amount * 100 / 87);
        return {
            salary: amount,
            tax: amountWithTax - amount,
            employeeCost: amountWithTax
        }
    }
    else {
        const amountWithoutTax = Math.round(amount * 87 / 100);
        return {
            salary: amountWithoutTax,
            tax: Math.round(amount * 0.13),
            employeeCost: amount,
        }
    }
}

//regExp для разделения числа на разряды
const regExp: RegExp = /(?<=\d)(?=(\d{3})+(?!\d))/g;

export const splitIntoDigits: (val: number) => string = (val: number) =>
    val.toString().replace(regExp, " ");
