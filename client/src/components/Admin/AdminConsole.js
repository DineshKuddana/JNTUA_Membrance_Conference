// AdminConsole.js
import React from 'react';
import TableDisplay from './TableDisplay'; // Import the new TableDisplay component
import './Admin.css';

const AdminConsole = () => {
  return (
    <div className="admin-console">
      <h1>Welcome to the Admin Console</h1>
      {/* Add more admin functionalities here */}
      <TableDisplay /> {/* Display the table */}
    </div>
  );
};

export default AdminConsole;
