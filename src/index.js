//pcolor999

import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem 0' }}>
              <p>There's nothing here</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
