import React from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";

//import "../css/realtime.css"; // Import your CSS file for styling

export class RealtimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(database, "users");

    onValue(
      dbRef,
      (snapshot) => {
        let records = [];
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          records.push({ key: keyName, data: data });
        });
        this.setState({ tableData: records });
      },
      (error) => {
        console.error("Error fetching data from Firebase:", error);
      }
    );
  }

  render() {
    return (
      <div className="table-container scrollable-table"> 
      <h2>User Info</h2> 
      <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>G-Points</th>
            </tr>
          </thead>

          <tbody>
            {this.state.tableData.map((rowd, index) => {
              return (
                <tr key={rowd.key}>
                  <td>{index + 1}</td>
                  <td>{rowd.data.key}</td>
                  <td>{rowd.data.firstname}</td>
                  <td>{rowd.data.lastname}</td>
                  <td>{rowd.data.email}</td>
                  <td>{rowd.data.gpoints}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
