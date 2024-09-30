export default function ContentText({ heroStyle, heroType, element, children }) {
  return (
    <div className={heroStyle}>
      {heroType === 'Planet' && <h2>{element.title}</h2>}
      {heroType === 'Crew' && (
        <>
          <h4>{element.position}</h4>
          <h3>{element.name}</h3>
        </>
      )}
      {heroType === 'Technology' && (
        <>
          <h4>The terminology...</h4>
          <h3>{element.title}</h3>
        </>
      )}

      <p className="p-4">{children}</p>

      {heroType === 'Planet' && (
        <>
          <hr className="styled-line-2" />
          <div className="planet-statistics-container">
            <div className="planet-statistics-content">
              <p className="p-2">Avg. distance</p>
              <p className="p-1">{element.distance}</p>
            </div>
            <div className="planet-statistics-content">
              <p className="p-2">Est. travel time</p>
              <p className="p-1">{element.travelTime}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
