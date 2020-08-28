import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {mount} from "enzyme";
import App from '../../components/App';
import {SalaryType} from "../../lib/SalaryFormTypes";

const mockStore = configureStore();
const mockDispatchFn = jest.fn();

describe('<App />', () => {
    let wrapper: any;
    const props: any = {
        initSalary: () => {},
        salaryType: SalaryType.PER_MONTH,
    };

    it('defines the component', () => {
        wrapper = mount(
            <Provider store={mockStore()}>
                <App {...props} dispatch={mockDispatchFn} />
            </Provider>,
        );
        expect(wrapper).toBeDefined();
    });

    it('renders Salary component', () => {
        expect(wrapper.find('Salary').first()).toHaveLength(1);
    });

    it('renders Payroll component', () => {
        expect(wrapper.find('Payroll').first()).toHaveLength(1);
    });
});
