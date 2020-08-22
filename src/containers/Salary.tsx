import {connect} from 'react-redux';

import Salary from "../components/Salary";
import {formValueSelector} from "redux-form";

export const SALARY_TYPES = {
    PER_MONTH: 'perMonth',
    MIN_WAGE: 'minWage',
    PER_DAY: 'perDay',
    PER_HOUR: 'perHour',
};

const selector = formValueSelector('salary');

const mapStateToProps = (state: any) => ({
        salaryType: selector(state, 'salaryType'),
        personalTax: selector(state, 'personalTax'),
});

export default connect(mapStateToProps)(Salary);
