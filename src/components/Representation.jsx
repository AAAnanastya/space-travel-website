export default function Representation({ subtitle, title, children }) {
  return (
    <div className="representation-container">
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
