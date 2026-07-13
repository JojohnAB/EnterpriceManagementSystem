import "./Cloud.css";

const projectData = [
  {
    id: 1,
    project: "E-Commerce Website",
    manager: "David",
    team: "Team A",
    progress: "85%",
    deadline: "20 Jul",
    status: "Active",
  },
  {
    id: 2,
    project: "Hospital Management",
    manager: "Sophia",
    team: "Team B",
    progress: "60%",
    deadline: "15 Aug",
    status: "Review",
  },
  {
    id: 3,
    project: "Food Delivery App",
    manager: "Alex",
    team: "Team C",
    progress: "100%",
    deadline: "Completed",
    status: "Completed",
  },
  {
    id: 4,
    project: "CRM Dashboard",
    manager: "Emma",
    team: "Team D",
    progress: "40%",
    deadline: "10 Sep",
    status: "Delayed",
  },
  {
    id: 5,
    project: "Cloud Migration",
    manager: "John",
    team: "Team E",
    progress: "92%",
    deadline: "5 Jul",
    status: "Active",
  },
];

function Project() {
  return (
    <div className="cloud-page">

      <div className="top">

        <h1>Project Management</h1>

        <div className="top-right">

          <input
            type="text"
            placeholder="Search Projects..."
          />

          <button>+ Add Project</button>

        </div>

      </div>

      <div className="dashboard">

        <div className="card">
          <p>Total Projects</p>
          <h2>48</h2>
        </div>

        <div className="card">
          <p>Active Teams</p>
          <h2>15</h2>
        </div>

        <div className="card">
          <p>Completed</p>
          <h2>36</h2>
        </div>

        <div className="card">
          <p>Pending Tasks</p>
          <h2>142</h2>
        </div>

      </div>

      <table>

        <thead>

          <tr>
            <th>Project</th>
            <th>Manager</th>
            <th>Team</th>
            <th>Progress</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {projectData.map((item) => (

            <tr key={item.id}>

              <td>{item.project}</td>

              <td>{item.manager}</td>

              <td>{item.team}</td>

              <td>{item.progress}</td>

              <td>{item.deadline}</td>

              <td>
                <span className={item.status.toLowerCase()}>
                  {item.status}
                </span>
              </td>

              <td>

                <button className="edit">✏️</button>

                <button className="delete">🗑️</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Project;