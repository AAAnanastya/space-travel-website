export default function RepresentationText({ planet, distance, travelTime, children }) {
  return (
    <div>
      <h2>{planet}</h2>
      <p className="p-4">{children}</p>
      <hr className="styled-line-2" />
      <div className="planet-statistics-container">
        <div className="planet-statistics-content">
          <p className="p-2">Avg. distance</p>
          <p className="p-1">{distance}</p>
        </div>
        <div className="planet-statistics-content">
          <p className="p-2">Est. travel time</p>
          <p className="p-1">{travelTime}</p>
        </div>
      </div>
    </div>
  );
}
