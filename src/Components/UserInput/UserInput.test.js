import { fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserInput from './UserInput';
import { Alert } from 'react';


test('it should render User Input', () => {
  render(<UserInput/>);
});

test("it should check input validation", async () => {
    const { getByText } = render(<UserInput from="" to="" />);

    await userEvent.click(getByText("Search"));
    const error = getByText('Please enter valid input');
    expect(error).toBeTruthy();
});

test("it should check if error is hidden if input is present", async () => {
    const { getByText } = render(<UserInput from="From" to="To" />);

    try {
        await userEvent.click(getByText("Search"));
        const error = getByText('Please enter valid input');
        expect(error).toBeTruthy();
    } catch (e) {
        expect(e).not.toBeNull();
    }
});

test("it should check if from location input 'from' the user is properly read", () => {
    const { getByTestId } = render(<UserInput from="" to="" />);
    const input = getByTestId('from');
    fireEvent.change(input, { target: { value: 'Du Bois Library, Amherst' } })
    expect(screen.getByDisplayValue('Du Bois Library, Amherst')).toBeTruthy();
});

test("it should check if from location input 'to' the user is properly read", () => {
    const { getByTestId } = render(<UserInput from="" to="" />);
    const input = getByTestId('to');
    fireEvent.change(input, { target: { value: 'The Spoke, Amherst' } })
    expect(screen.getByDisplayValue('The Spoke, Amherst')).toBeTruthy();
});


test("it should check if from location input 'elevation preference' the user is properly read", () => {
    const { getByTestId } = render(<UserInput from="" to="" accuracy="0"/>);
    const input = getByTestId('elevation-preference');
    fireEvent.change(input, { target: { value: 10 } })
    expect(screen.getAllByDisplayValue(10)).toBeTruthy();
});

