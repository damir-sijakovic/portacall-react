import applist from "../../app-list.json";
import './mainProjects.css';

const MainProjects = () => {
  return (
    <div className="container">
      <div className="title is-4 has-weight-black has-mb-1">Projects </div>

      <div className="card is-shadowed project-card">
        <div className="has-w-full has-mb-8">
          <table className="table is-divided has-header-fixed has-mb-none">
            <thead>
              <tr>
                <th className="has-bg-white is-sticky has-top-none">Name</th>
                <th className="has-bg-white is-sticky has-top-none">About</th>
                <th className="has-bg-white is-sticky has-top-none">Link</th>
              </tr>
            </thead>
            <tbody>{createProjectItems()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;

const createProjectItems = () => {
  let projectData = [];
  for (let i = 0; i < applist.length; i++) {
    let name = applist[i].name;
    let desc = applist[i].desc;
    let link = applist[i].link;
    let img = applist[i].img;
    let key = "project_" + i;

    projectData.push(
      <tr key={key}>
        <td>{name}</td>
        <td>{desc}</td>
        <td>
          <a href={link} className="is-not-underlined">
            🔗
          </a>
        </td>
      </tr>
    );
  }

  return projectData;
};
