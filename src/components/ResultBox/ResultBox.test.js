import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from='PLN' to='USD' amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
      const testCases = [
        { from: 'PLN', to: 'USD', amount: 100, result: 'PLN 100.00 = $28.57' },
        { from: 'PLN', to: 'USD', amount: 20, result: 'PLN 20.00 = $5.71' },
        { from: 'PLN', to: 'USD', amount: 200, result: 'PLN 200.00 = $57.14' },
        { from: 'PLN', to: 'USD', amount: 350, result: 'PLN 350.00 = $100.00' },
      ];

      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
        const conversion = screen.getByTestId('conversion');
        expect(conversion).toHaveTextContent(testObj.result);
        cleanup();
      }
    });

    it('should render proper info about conversion when USD -> PLN', () => {
      const testCases = [
        { from: 'USD', to: 'PLN', amount: 100, result: '$100.00 = PLN 350.00' },
        { from: 'USD', to: 'PLN', amount: 20, result: '$20.00 = PLN 70.00' },
        { from: 'USD', to: 'PLN', amount: 200, result: '$200.00 = PLN 700.00' },
        { from: 'USD', to: 'PLN', amount: 350, result: '$350.00 = PLN 1,225.00' },
      ];

      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
        const conversion = screen.getByTestId('conversion');
        expect(conversion).toHaveTextContent(testObj.result);
        cleanup();
      }
    });

    it('should render proper info about conversion when PLN -> PLN', () => {
      const testCases = [
        { from: 'PLN', to: 'PLN', amount: 100, result: 'PLN 100.00 = PLN 100.00' },
        { from: 'PLN', to: 'PLN', amount: 20, result: 'PLN 20.00 = PLN 20.00' },
        { from: 'PLN', to: 'PLN', amount: 200, result: 'PLN 200.00 = PLN 200.00' },
        { from: 'PLN', to: 'PLN', amount: 350, result: 'PLN 350.00 = PLN 350.00' },
      ];

      for(const testObj of testCases) {
        render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
        const conversion = screen.getByTestId('conversion');
        expect(conversion).toHaveTextContent(testObj.result);
        cleanup();
      }
    });
  });
