import React from 'react';
import { Routes, Route } from "react-router-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import ScreenA from './pages/screenA';
import ScreenB1 from './pages/screenB1';
import ScreenB2 from './pages/screenB2';
import ScreenB3 from './pages/screenB3';
import ScreenC1 from './pages/screenC1';
import ScreenC2 from './pages/screenC2';
import ScreenD from './pages/screenD';


export const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={ <ScreenA/> } />
      <Route path='/screenB1' element={ <ScreenB1/> } />
      <Route path='/screenB2' element={ <ScreenB2/> } />
      <Route path='/screenB3' element={ <ScreenB3/> } />
      <Route path='/screenC1' element={ <ScreenC1/> } />
      <Route path='/screenC2' element={ <ScreenC2/> } />
      <Route path='/screenD' element={ <ScreenD/> } />
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;