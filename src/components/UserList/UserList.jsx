import "./UserList.css";

export const UserList = (props) => {
  const users = props.userNames;
  return (
    <div className="component-wrapper component-wrapper-4">
      <h2 className="component-name">Component 'UserList'</h2>
      <ol>
        {users.map((user) => (
          <li className="user-name-item" key={user}>
            <p className="user-name">{user}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
