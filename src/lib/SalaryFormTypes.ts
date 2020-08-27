export enum SalaryType {
    PER_MONTH = 'perMonth',
    MIN_WAGE = 'minWage',
    PER_DAY = 'perDay',
    PER_HOUR = 'perHour',
}

export interface SalaryFormTypes {
    salaryType: SalaryType,
    personalTax: boolean,
    amount: number,
}

export const DEFAULT_AMOUNT = {
    MONTH: 40000,
    DAY: 1500,
    HOUR: 400,
};

