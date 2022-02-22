import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoces';
import Invoice from './routes/invoice';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />}>
          <Route
            index
            element={
              <div style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </div>
            }
          ></Route>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>(404) there is nothing here</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
