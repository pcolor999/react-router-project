import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { getInvoices } from '../data.js';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div>
      <nav>
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              };
            }}
            to={'/invoices/' + invoice.number}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
