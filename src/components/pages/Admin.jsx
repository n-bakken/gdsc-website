import React from "react";
import { RealtimeData } from "./Backend/realtime"; // Import your RealtimeData component
import StoreImageTextFirebase from "./Backend/ImageText"; // Import your StoreImageTextFirebase component
import ResourceUpload from "./Backend/Reupload"; // Import your ResourceUpload component
import "./css/Admin.css";

function Admin() {
  return (
    <div className="container">
      <h1>Admin Page for GDCS</h1>
      <div className="section">
        <h2>Store Image and Text</h2>
        <StoreImageTextFirebase />
      </div>
      <div className="section">
        <h2>Realtime Data</h2>
        <RealtimeData />
      </div>
      <div className="section">
        <h2>Resource Upload</h2>
        <ResourceUpload />
      </div>
    </div>
  );
}

export default Admin;