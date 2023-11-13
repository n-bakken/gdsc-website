import React, { useState } from "react";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgDB, txtDB } from "../../../firebase";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

function ResourceUpload() {
  const [slideTitle, setSlideTitle] = useState("");
  const [slideFile, setSlideFile] = useState(null);
  const [slideFileName, setSlideFileName] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagError, setTagError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(""); // Added state for success message
  const [uploadError, setUploadError] = useState(""); // Added state for error message

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setSlideFile(file);
    setSlideFileName(file ? file.name : "");
  };

  const validateTags = () => {
    if (selectedTags.length === 0) {
      setTagError("Please select at least one tag");
      return false;
    }
    setTagError("");
    return true;
  };

  const handleUploadSlide = async () => {
    if (!validateTags() || !slideFile) {
      return; // Do not proceed if there are validation errors
    }

    const slideName = slideTitle + "_" + v4();
    const slidesRef = ref(imgDB, `Resources/${slideName}`);
    
    try {
      await uploadBytes(slidesRef, slideFile);
      const downloadURL = await getDownloadURL(slidesRef);

      const db = getFirestore();
      const slidesCollection = collection(db, "slides");

      await addDoc(slidesCollection, {
        title: slideTitle,
        imgUrl: downloadURL,
        tags: selectedTags,
        timestamp: serverTimestamp(),
      });

      // Clear form fields and show success message
      setSlideTitle("");
      setSlideFile(null);
      setSlideFileName("");
      setSelectedTags([]);
      setUploadSuccess("Slide uploaded successfully!");
      setUploadError(""); // Clear any previous error message
    } catch (error) {
      // Handle the error and show an error message
      setUploadError("Error uploading the slide. Please try again.");
      setUploadSuccess(""); // Clear any previous success message
    }
  };

  return (
    <div>
      <h2>Upload Slides</h2>
      <input
        type="text"
        placeholder="Slide Title"
        value={slideTitle}
        onChange={(e) => setSlideTitle(e.target.value)}
      />
      <br />
      <input type="file" onChange={handleUpload} />
      <br />
      <label>
        Select Tags for the Slide:
        <select
          multiple
          value={selectedTags}
          onChange={(e) =>
            setSelectedTags(Array.from(e.target.selectedOptions, (option) => option.value))
          }
        >
          <option value="Meetup">Meetup</option>
          <option value="Leetcode">Leetcode</option>
          <option value="Workshop">Workshop</option>
        </select>
      </label>
      <br />
      <span style={{ color: "red" }}>{tagError}</span>
      <br />
      <button onClick={handleUploadSlide}>Upload</button>
      <br />
      {uploadSuccess && <p style={{ color: "green" }}>{uploadSuccess}</p>}
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
      {slideFileName && <p>Selected Slide File: {slideFileName}</p>}
    </div>
  );
}

export default ResourceUpload;
