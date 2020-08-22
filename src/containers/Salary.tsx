import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import {Dispatch} from "redux";

import Salary from "../components/Salary";

const init = {
    salaryType: 'perMonth',
    personalTax: true,
    amount: 40000,
};

const mapStateToProps = (state: any) => {
    const salary = state.form.salary;
    return {
        salaryType: salary ? salary.values.salaryType : init.salaryType,
        personalTax: salary ? salary.values.personalTax : init.personalTax,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    initSalary: () => dispatch(initialize('salary', init)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Salary);
