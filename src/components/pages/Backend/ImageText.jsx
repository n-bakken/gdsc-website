import React, { useEffect, useState } from "react";
import { imgDB, txtDB } from "../../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, onSnapshot, serverTimestamp } from "firebase/firestore";
//import "../css/ImageText.css"; // Import the CSS file for styling

function StoreImageTextFirebase() {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [ampm, setAmPm] = useState("AM");
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedMeetup, setSelectedMeetup] = useState(false);
  const [selectedLeetcode, setSelectedLeetcode] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(false);

  const [dateError, setDateError] = useState(""); // Added state for date validation error
  const [timeError, setTimeError] = useState(""); // Added state for time validation error
  const [tagError, setTagError] = useState("");   // Added state for tag validation error

  useEffect(() => {
    // Subscribe to the Firestore collection for real-time updates
    const db = getFirestore();
    const valRef = collection(db, "txtData");

    const unsubscribe = onSnapshot(valRef, (querySnapshot) => {
      const updatedData = [];
      querySnapshot.forEach((doc) => {
        updatedData.push({ ...doc.data(), id: doc.id });
      });
      setData(updatedData);
    });

    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        setImg(val);
      });
    });
  };

  const validateEventDate = () => {
    // Validate event date format (dd/mm/yyyy)
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!eventDate.match(datePattern)) {
      setDateError("Date should be in the format dd/mm/yyyy");
      return false;
    }
    setDateError("");
    return true;
  };

  const validateEventTime = () => {
    // Validate event time format (hh:mm)
    const timePattern = /^(\d{1,2}):(\d{2})$/;
    if (!eventTime.match(timePattern)) {
      setTimeError("Time should be in the format hh:mm");
      return false;
    }
    setTimeError("");
    return true;
  };

  const validateTag = () => {
    // Validate at least one tag is selected
    if (!(selectedMeetup || selectedLeetcode || selectedWorkshop)) {
      setTagError("Please select at least one tag");
      return false;
    }
    setTagError("");
    return true;
  };

  const handleClick = async () => {
    if (!validateEventDate() || !validateEventTime() || !validateTag()) {
      return; // Do not proceed if there are validation errors
    }

    const valRef = collection(txtDB, "txtData");
    await addDoc(valRef, {
      eventName: eventName,
      location: location,
      eventDate: eventDate,
      eventTime: eventTime + " " + ampm,
      txtVal: txt,
      imgUrl: img,
      tags: [
        ...(selectedMeetup ? ["Meetup"] : []),
        ...(selectedLeetcode ? ["Leetcode"] : []),
        ...(selectedWorkshop ? ["Workshop"] : []),
      ],
      timestamp: serverTimestamp(),
    });
    alert("Data added successfully");

    setData((prevData) => [
      ...prevData,
      {
        eventName: eventName,
        location: location,
        eventDate: eventDate,
        eventTime: eventTime + " " + ampm,
        txtVal: txt,
        imgUrl: img,
        tags: selectedTags,
        timestamp: new Date(),
      },
    ]);

    setEventName("");
    setLocation("");
    setEventDate("");
    setEventTime("");
    setAmPm("AM");
    setTxt("");
    setImg("");
    setSelectedTags([]);
    setSelectedMeetup(false);
    setSelectedLeetcode(false);
    setSelectedWorkshop(false);
  };

  return (
    <div>
      <input
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <br />
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <input
        placeholder="Event Date (dd/mm/yyyy)"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <span style={{ color: "red" }}>{dateError}</span>
      <br />
      <input
        placeholder="Event Time (hh:mm)"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
      />
      <span style={{ color: "red" }}>{timeError}</span>
      <select value={ampm} onChange={(e) => setAmPm(e.target.value)}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <br />
      <input placeholder="Text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <br />
      <input type="file" onChange={(e) => handleUpload(e)} />
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedMeetup}
          onChange={() => setSelectedMeetup(!selectedMeetup)}
        />
        Meetup
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedLeetcode}
          onChange={() => setSelectedLeetcode(!selectedLeetcode)}
        />
        Leetcode
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedWorkshop}
          onChange={() => setSelectedWorkshop(!selectedWorkshop)}
        />
        Workshop
      </label>
      <br />
      <span style={{ color: "red" }}>{tagError}</span>
      <br />
      <br />
      <button onClick={handleClick}>Add</button>

      {data.map((value) => (
        <div key={value.id} className="data-container">
          <h1>{value.eventName}</h1>
          <p>Location: {value.location}</p>
          <p>Date: {value.eventDate}</p>
          <p>Time: {value.eventTime}</p>
          <p>{value.txtVal}</p>
          <img
            src={value.imgUrl}
            alt="Description of the image"
            height="200px"
            width="200px"
          />
          {value.tags && <p>Tags: {value.tags.join(", ")}</p>}
        </div>
      ))}
    </div>
  );
}

export default StoreImageTextFirebase;
