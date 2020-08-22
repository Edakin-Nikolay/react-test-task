import {connect} from 'react-redux';

import Payroll from "../components/Payroll";
import {formValueSelector} from "redux-form";

const selector = formValueSelector('salary');

const mapStateToProps = (state: any) => ({
        amount: selector(state, 'amount'),
        personalTax: selector(state, 'personalTax'),
});

export default connect(mapStateToProps)(Payroll);
