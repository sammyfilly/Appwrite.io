import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { InputCheckbox } from '../../../src/lib/elements/forms';

test('shows checkbox input', () => {
    const { getByText, getByLabelText } = render(InputCheckbox, { id: 'input', label: 'checkbox' });
    const checkbox = getByLabelText('checkbox');

    expect(getByText('checkbox')).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
});

test('shows checkbox input - required', () => {
    const { getByLabelText } = render(InputCheckbox, {
        id: 'input',
        label: 'checkbox',
        required: true
    });

    expect(getByLabelText('checkbox')).toBeRequired();
});

test('shows checkbox input - disabled', () => {
    const { getByLabelText } = render(InputCheckbox, {
        id: 'input',
        label: 'checkbox',
        disabled: true
    });

    expect(getByLabelText('checkbox')).toBeDisabled();
});

test('state', async () => {
    const { component, getByLabelText } = render(InputCheckbox, { id: 'input', label: 'checkbox' });
    const checkbox = getByLabelText('checkbox');

    expect(component.value).toEqual(false);
    await userEvent.click(checkbox);
    expect(component.value).toEqual(true);
});

test('state', async () => {
    const { getByLabelText, component } = render(InputCheckbox, { id: 'input', label: 'checkbox' });
    const checkbox = getByLabelText('checkbox');

    expect(checkbox).not.toBeChecked();
    expect(component.value).toStrictEqual(false);

    await fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(component.value).toStrictEqual(true);

    await fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(component.value).toStrictEqual(false);

    component.value = true;
    expect(checkbox).toBeChecked();
    expect(component.value).toStrictEqual(true);

    component.value = false;
    expect(checkbox).not.toBeChecked();
    expect(component.value).toStrictEqual(false);
});
