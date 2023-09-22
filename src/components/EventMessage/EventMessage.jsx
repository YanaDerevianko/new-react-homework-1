export const EventMessage = ({descr, date}) => {
  return (
    <div className="component-wrapper component-wrapper-3">
      <h2 className="component-name">Component 'EventMessage'</h2>
      <p>{descr}</p>
      <p>Date of event: {date}</p>
    </div>
  );
};
