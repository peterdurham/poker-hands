import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Controls from './Controls';

afterEach(cleanup)

test('<Controls/>', () => {
    const {debug, getByTestId } = render(<Controls />);

    // const dealhandButton = getByTestId('dealhand-button');
    // expect(dealhandButton.tagName).toBe('BUTTON');
    // expect(dealhandButton.textContent).toBe('Deal Hand');

    // const dealflopButton = getByTestId('dealflop-button');
    // expect(dealflopButton.tagName).toBe('BUTTON');
    // expect(dealflopButton.textContent).toBe('Deal Flop');
    
    // const dealturnButton = getByTestId('dealturnd-button');
    // expect(dealturnButton.tagName).toBe('BUTTON');
    // expect(dealturnButton.textContent).toBe('Deal Turn');

    // const dealriverButton = getByTestId('dealriver-button');
    // expect(dealriverButton.tagName).toBe('BUTTON');
    // expect(dealriverButton.textContent).toBe('Deal River');

    const handcompleteButton = getByTestId('handcomplete-button');
    expect(handcompleteButton.tagName).toBe('BUTTON');
    expect(handcompleteButton.textContent).toBe('Hand Complete');


})