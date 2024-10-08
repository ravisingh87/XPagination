import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import Pagination from "./components/Pagination";
const App = () => {
  const [empData, setEmpData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const json = await res.json();
      setEmpData([...json]);
      setLoading(false);
    } catch (error) {
      alert("Failed to fetch data.");
    }
  };
  const handlePagination = (operation) => {
    if (operation === "+") {
      setCurrentPage((prev) => prev + 1);
    } else if (operation === "-") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const indexOfLastPost = currentPage * postsPerPge;
  const indexOfFirstPost = indexOfLastPost - postsPerPge;
  const currentPosts =
    empData.length > 0 ? empData.slice(indexOfFirstPost, indexOfLastPost) : [];

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='container'>
      <h3>Employee Data Table</h3>
      <EmployeeTable data={currentPosts} loading={loading} />
      <Pagination
        length={empData.length}
        postPerPage={postsPerPge}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
