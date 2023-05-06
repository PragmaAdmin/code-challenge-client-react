import { render, screen, waitFor } from '@testing-library/react'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


describe('index.js', () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <React.StrictMode>
                <header>
                    <h1>SensorTech</h1>
                </header>
                <App />
            </React.StrictMode>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the header with text "SensorTech"', () => {
        const { getByText } = render(
            <React.StrictMode>
                <header>
                    <h1>SensorTech</h1>
                </header>
                <App />
            </React.StrictMode>
        );
        const headerElement = getByText(/SensorTech/i);
        expect(headerElement).toBeInTheDocument();
    });
})