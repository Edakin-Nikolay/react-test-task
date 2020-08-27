import {connect} from 'react-redux';
import {formValueSelector, initialize} from 'redux-form';
import {Dispatch} from "redux";

import App from "../components/App";
import {SalaryFormTypes, SalaryType} from '../lib/SalaryFormTypes';

const initSalary: SalaryFormTypes = {
    salaryType: SalaryType.PER_MONTH,
    personalTax: true,
    amount: 40000,
};

const selector = formValueSelector('salary');

const mapStateToProps = (state: any) => ({
       salaryType: selector(state, 'salaryType'),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    initSalary: () => dispatch(initialize('salary', initSalary)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
