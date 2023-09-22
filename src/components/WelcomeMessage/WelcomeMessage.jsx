import "./WelcomeMessage.css";

export const WelcomeMessage = ({ userName }) => {
  return (
    <div className="component-wrapper component-wrapper-1">
      <h2 className="component-name">Component 'WelcomeMessage'</h2>
      <h1>Nice to see you, {userName}</h1>
    </div>
  );
};
