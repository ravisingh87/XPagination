import React, { useEffect, useState } from "react";
import "./Employee.css";
import Pagination from "./Pagination";
import EmployeeTable from "./EmployeeTable";

const Employee = () => {
  const [empData, setEmpData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const json = await res.json();
      setEmpData([...json]);
    } catch (error) {
      alert(error);
    }
  };
  const handlePagination = (pageNumber, operation) => {
    if (operation === "+") {
      setCurrentPage((prev) => prev + 1);
    } else if (operation === "-") {
      setCurrentPage((prev) => prev - 1);
    }
    // setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPge;
  const indexOfFirstPost = indexOfLastPost - postsPerPge;
  const currentPosts = empData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='employee_container'>
      <h3>Employee Data Table</h3>
      <EmployeeTable data={currentPosts} />
      <Pagination
        length={empData.length}
        postPerPage={postsPerPge}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Employee;
