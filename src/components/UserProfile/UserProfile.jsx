import "./UserProfile.css";

export const UserProfile = (props) => {
  const { name, age, city } = props.profile;
  return (
    <div className="component-wrapper component-wrapper-3">
     <h2 className="component-name">Component 'UserProfile'</h2>
      <p className="user-name">{name}</p>
      <p className="user-age">{age}</p>
      <p className="user-city">{city}</p>
    </div>
  );
};
