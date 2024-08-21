import React from "react";

const EmployeeTable = ({ data, loading }) => {
  return (
    <div className='employee_table'>
      {!loading ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeTable;
