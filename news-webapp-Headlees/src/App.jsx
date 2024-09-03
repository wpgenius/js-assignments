import React from "react";
import { Outlet } from "react-router-dom";
// Post component conatins all the data related to Post and Pagination
import Post from "./components/Post"; 

function App() {
  return (
    <div>
      <Outlet />
      <Post />
    </div>
  )
}

export default App;
