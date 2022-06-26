import { render, screen, cleanup } from '@testing-library/react';

import {BrowserRouter as Router} from 'react-router-dom';

import ScreenA from '../screenA'

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

test('should render screen A', () => {
    render(
        <QueryClientProvider client={queryClient}>
        <Router>
        <ScreenA />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>);
    const screenAElement = screen.getByText('A')
    expect(screenAElement).toBeInTheDocument();
})