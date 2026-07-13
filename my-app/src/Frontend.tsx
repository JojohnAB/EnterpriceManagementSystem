import "./Cloud.css";

const frontendData = [
  {
    id: 1,
    component: "Navbar",
    framework: "React",
    developer: "John",
    status: "Completed",
    updated: "10 mins ago",
  },
  {
    id: 2,
    component: "Login Form",
    framework: "React",
    developer: "Emma",
    status: "In Progress",
    updated: "30 mins ago",
  },
  {
    id: 3,
    component: "Dashboard",
    framework: "React",
    developer: "Alex",
    status: "Testing",
    updated: "1 hr ago",
  },
  {
    id: 4,
    component: "Footer",
    framework: "React",
    developer: "Sophia",
    status: "Completed",
    updated: "Yesterday",
  },
  {
    id: 5,
    component: "Product Card",
    framework: "React",
    developer: "David",
    status: "Pending",
    updated: "2 Days Ago",
  },
];

function Frontend() {
  return (
    <div className="cloud-page">

      <div className="top">

        <h1>Frontend Management</h1>

        <div className="top-right">
          <input type="text" placeholder="Search Components..." />
          <button>+ Add Component</button>
        </div>

      </div>

      <div className="dashboard">

        <div className="card">
          <p>Total Projects</p>
          <h2>24</h2>
        </div>

        <div className="card">
          <p>Components</p>
          <h2>185</h2>
        </div>

        <div className="card">
          <p>Developers</p>
          <h2>12</h2>
        </div>

        <div className="card">
          <p>Open Bugs</p>
          <h2>14</h2>
        </div>

      </div>

      <table>

        <thead>

          <tr>
            <th>Component</th>
            <th>Framework</th>
            <th>Developer</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {frontendData.map((item) => (

            <tr key={item.id}>

              <td>{item.component}</td>

              <td>{item.framework}</td>

              <td>{item.developer}</td>

              <td>
                <span className={item.status.toLowerCase().replace(" ", "-")}>
                  {item.status}
                </span>
              </td>

              <td>{item.updated}</td>

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

export default Frontend;