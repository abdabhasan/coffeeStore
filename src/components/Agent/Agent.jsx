import "./agent.scss";

const Agent = ({ id, name, location, phone }) => {
  return (
    <div className="agents-container">
      <article key={id} className="agent">
        <h4>{name}</h4>
        <p>الموقع : {location}</p>
        <p>الهاتف : {phone}</p>
      </article>
    </div>
  );
};

export default Agent;
