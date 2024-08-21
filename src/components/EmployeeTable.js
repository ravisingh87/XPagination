import React from "react";

const EmployeeTable = ({ data, loading }) => {
  return (
    <div className='employee_table'>
      {!loading ? (
        <table>
          <tbody>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>

            {data.length > 0 &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
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
