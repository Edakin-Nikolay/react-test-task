import * as React from 'react';
import {mount} from 'enzyme';
import {cleanup} from "@testing-library/react";
import Salary from "../../components/Salary";
import {Provider} from "react-redux";
import {SalaryFormTypes, SalaryType} from "../../lib/SalaryFormTypes";
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';

describe('<Salary />', () => {
    afterEach(cleanup);
    let wrapper: any;
    let store: any;

    const props: any = {};
    const init: SalaryFormTypes = {
        salaryType: SalaryType.PER_MONTH,
        personalTax: true,
        amount: 40000,
    }

    beforeEach(() => {
        store = createStore(combineReducers({ form: formReducer }));
        wrapper = mount(
            <Provider store={store}>
                <Salary initialValues={init} {...props} />
            </Provider>
        );
    });

    it('defines the component', () => {
        expect(wrapper).toBeDefined();
    });

    describe('defines Salary form fields', () => {
        it('renders radioButton PerMont field', () => {
            const radioButton = wrapper.find('Field[name="salaryType"][checkId=1]').first();
            expect(radioButton.prop('type')).toBe('radio');
            expect(radioButton.prop('label')).toBe('Оклад за месяц');
            expect(radioButton.prop('value')).toBe(SalaryType.PER_MONTH);
        });

        it('renders radioButton MinWage field', () => {
            const radioButton = wrapper.find('Field[name="salaryType"][checkId=2]').first();
            expect(radioButton.prop('type')).toBe('radio');
            expect(radioButton.prop('label')).toBe('МРОТ');
            expect(radioButton.prop('value')).toBe(SalaryType.MIN_WAGE);
        });

        it('renders radioButton PerDay field', () => {
            const radioButton = wrapper.find('Field[name="salaryType"][checkId=3]').first();
            expect(radioButton.prop('type')).toBe('radio');
            expect(radioButton.prop('label')).toBe('Оплата за день');
            expect(radioButton.prop('value')).toBe(SalaryType.PER_DAY);
        });

        it('renders radioButton PerHour field', () => {
            const radioButton = wrapper.find('Field[name="salaryType"][checkId=4]').first();
            expect(radioButton.prop('type')).toBe('radio');
            expect(radioButton.prop('label')).toBe('Оплата за час');
            expect(radioButton.prop('value')).toBe(SalaryType.PER_HOUR);
        });

        it('renders switchButton field', () => {
            const switchButton = wrapper.find('[name="personalTax"]').find('input').first();
            expect(switchButton.prop('value')).toBe(true);
            expect(switchButton.prop('type')).toBe('checkbox');
        });

        it('renders amount name field', () => {
            const textField = wrapper.find('[name="amount"]').find('input');
            expect(textField.prop('value')).toEqual(40000);
        });
    });

});
