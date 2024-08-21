import React from "react";

const EmployeeTable = ({ data }) => {
  return (
    <div className='employee_table'>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.role}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
