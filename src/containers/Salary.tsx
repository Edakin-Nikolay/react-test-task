import {connect} from 'react-redux';

import Salary from "../components/Salary";
import {change, formValueSelector} from "redux-form";
import {Dispatch} from "redux";

const selector = formValueSelector('salary');

const mapStateToProps = (state: any) => ({
        salaryType: selector(state, 'salaryType'),
        personalTax: selector(state, 'personalTax'),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeAmount: (amount: number) => dispatch(change('salary', 'amount', amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Salary);
