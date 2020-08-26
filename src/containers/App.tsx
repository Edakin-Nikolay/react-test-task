import {connect} from 'react-redux';
import {initialize, formValueSelector} from 'redux-form';
import {Dispatch} from "redux";

import App from "../components/App";
import { SalaryFormTypes } from '../lib/SalaryFormTypes';

const initSalary: SalaryFormTypes = {
    salaryType: 'perMonth',
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
