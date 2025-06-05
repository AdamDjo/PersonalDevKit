import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { MouseEvent } from 'react';
import { OnEvent } from '@custom-types/common';
import { ButtonTab } from './ButtonTab';

let onClick: OnEvent<MouseEvent<HTMLButtonElement>>;

beforeEach(() => {
    onClick = jest.fn();
});

describe('ButtonTab tests', () => {
    test('it should click on the button', async () => {
        render(<ButtonTab onClick={onClick}>Text</ButtonTab>);
        const buttonEl = screen.getByText('Text');
        await userEvent.click(buttonEl);
        expect(onClick).toHaveBeenCalled();
    });

    test('it should be disabled', () => {
        render(
            <ButtonTab disabled onClick={onClick}>
                Text
            </ButtonTab>
        );
        const buttonEl = screen.getByText('Text');
        expect(buttonEl).toBeDisabled();
    });

    test('it should be hidden', () => {
        const { container } = render(
            <ButtonTab isHidden disabled onClick={onClick}>
                Text
            </ButtonTab>
        );

        expect(container).toBeEmptyDOMElement();
    });

    test('it should default to button type', () => {
        render(
            <ButtonTab disabled onClick={onClick}>
                Text
            </ButtonTab>
        );
        const buttonEl = screen.getByText('Text');

        expect(buttonEl).toHaveAttribute('type', 'button');
    });

    test('it should not be active', () => {
        render(
            <ButtonTab disabled onClick={onClick}>
                Text
            </ButtonTab>
        );
        const buttonEl = screen.getByText('Text');
        expect(buttonEl).not.toHaveClass('button__active');
    });
});
