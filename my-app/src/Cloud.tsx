import "./Cloud.css";

const resources = [
  {
    id: 1,
    name: "AWS EC2 - Production",
    provider: "Amazon AWS",
    type: "Virtual Machine",
    status: "Running",
    region: "Mumbai",
    cost: "$245/mo",
  },
  {
    id: 2,
    name: "Azure SQL Database",
    provider: "Microsoft Azure",
    type: "Database",
    status: "Running",
    region: "Singapore",
    cost: "$180/mo",
  },
  {
    id: 3,
    name: "Google Storage",
    provider: "Google Cloud",
    type: "Storage",
    status: "Maintenance",
    region: "Delhi",
    cost: "$75/mo",
  },
  {
    id: 4,
    name: "AWS Kubernetes",
    provider: "Amazon AWS",
    type: "Container",
    status: "Stopped",
    region: "Mumbai",
    cost: "$0/mo",
  },
  {
    id: 5,
    name: "Azure VM Backup",
    provider: "Microsoft Azure",
    type: "Backup",
    status: "Running",
    region: "Chennai",
    cost: "$90/mo",
  },
];

function Cloud() {
  return (
    <div className="cloud-page">

      <div className="top">

        <h1>Cloud Management</h1>

        <div className="top-right">

          <input
            type="text"
            placeholder="Search cloud resources..."
          />

          <button>Add Instance</button>

        </div>

      </div>

      {/* Dashboard */}

      <div className="dashboard">

        <div className="card">
          <p>Total Resources</p>
          <h2>128</h2>
        </div>

        <div className="card">
          <p>Running Servers</p>
          <h2>96</h2>
        </div>

        <div className="card">
          <p>Storage Used</p>
          <h2>4.8 TB</h2>
        </div>

        <div className="card">
          <p>Monthly Cost</p>
          <h2>$3,820</h2>
        </div>

      </div>

      {/* Table */}

      <table>

        <thead>

          <tr>
            <th>Resource</th>
            <th>Provider</th>
            <th>Type</th>
            <th>Status</th>
            <th>Region</th>
            <th>Monthly Cost</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {resources.map((item) => (

            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.provider}</td>

              <td>{item.type}</td>

              <td>
                <span className={item.status.toLowerCase()}>
                  {item.status}
                </span>
              </td>

              <td>{item.region}</td>

              <td>{item.cost}</td>

              <td>

                <button className="edit">
                  ✏️
                </button>

                <button className="delete">
                  🗑️
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Cloud;