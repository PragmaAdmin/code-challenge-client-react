import { render, screen, waitFor } from '@testing-library/react'
import App from './App';

const beerMockData =[
    {
      id: '1',
      name: 'Pilsner',
      minimumTemperature: 4,
      maximumTemperature: 6,
      temperature: 5
    },
    {
      id: '2',
      name: 'IPA',
      minimumTemperature: 5,
      maximumTemperature: 6,
      temperature: 3,
    },
    {
      id: '3',
      name: 'Lager',
      minimumTemperature: 4,
      maximumTemperature: 7,
      temperature: 8
    }
  ];

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

    it('renders the heading Beers', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { level: 2 }, { name: 'Beers' });
        expect(heading).toBeInTheDocument();
    });
    
    it('fetches and displays the data from the API', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
          Promise.resolve({
            json: () => Promise.resolve(beerMockData),
          })
        );
    
        render(<App />);
        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(4);
    
        const headers = screen.getAllByRole('columnheader');
        expect(headers[0]).toHaveTextContent('Product');
        expect(headers[1]).toHaveTextContent('Temperature');
        expect(headers[2]).toHaveTextContent('Status');
    
        const cells = screen.getAllByRole('cell');
        expect(cells[0]).toHaveTextContent('Pilsner');
        expect(cells[1]).toHaveTextContent('5');
        expect(cells[2]).toHaveTextContent('all good');
        expect(cells[3]).toHaveTextContent('IPA');
        expect(cells[4]).toHaveTextContent('3');
        expect(cells[5]).toHaveTextContent('too low');
        expect(cells[6]).toHaveTextContent('Lager');
        expect(cells[7]).toHaveTextContent('8');
        expect(cells[8]).toHaveTextContent('too high');
    
        global.fetch.mockRestore();
    });


    it('fetches the data from the API every 5 seconds', async () => {
        jest.useFakeTimers();

        jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(beerMockData),
        })
        );

        render(<App />);
        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

        jest.advanceTimersByTime(5000);
        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));

        jest.advanceTimersByTime(5000);
        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(3));

        global.fetch.mockRestore();
    });
});
