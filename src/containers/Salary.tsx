import {connect} from 'react-redux';

import Salary from "../components/Salary";
import {change, formValueSelector} from "redux-form";
import {Dispatch} from "redux";

export const SALARY_TYPES = {
    PER_MONTH: 'perMonth',
    MIN_WAGE: 'minWage',
    PER_DAY: 'perDay',
    PER_HOUR: 'perHour',
};

export const DEFAULT_AMOUNT = {
    MONTH: 40000,
    DAY: 1500,
    HOUR: 400,
};

const selector = formValueSelector('salary');

const mapStateToProps = (state: any) => ({
        salaryType: selector(state, 'salaryType'),
        personalTax: selector(state, 'personalTax'),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeAmount: (amount: number) => dispatch(change('salary', 'amount', amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Salary);
