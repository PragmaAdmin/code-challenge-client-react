import {render} from '@testing-library/react';
import App from './App';
import React, { useState as useStateMock } from 'react'

const itemsMock = [{
    id: '1',
    name: 'Pilsner',
    temperature: 4,
    status: 'all good'
}, {
    id: '2',
    name: 'Pilsner',
    temperature: 4,
    status: 'too high'
}];

describe('<App />', () => {
    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementationOnce(() => useStateMock( itemsMock ));
    });

    it('renders without errors', () => {
        render(<App />)
    });

    it('can render table without erros', () => {
        render(<App />)

        itemsMock.forEach(element => {
            const line = document.getElementById(element.id);
            expect(line.innerHTML).toContain(element.name);
        });
    });
});
