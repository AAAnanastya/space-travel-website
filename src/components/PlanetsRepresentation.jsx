export default function PlanetsRepresentation({ planet, distance, travelTime, children }) {
  return (
    <div>
      <h3>{planet}</h3>
      <p>{children}</p>
      <hr className="styled-line-2" />
      <div className="planet-statistics-container">
        <div className="planet-statistics-content">
          <h4>Avg. distance</h4>
          <h5>{distance}</h5>
        </div>
        <div className="planet-statistics-content">
          <h4>Est. travel time</h4>
          <h5>{travelTime}</h5>
        </div>
      </div>
    </div>
  );
}
