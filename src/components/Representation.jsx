export default function Representation({ subtitle, title, children }) {
  return (
    <div className="representation-container">
      <h5>{subtitle}</h5>
      <h1>{title}</h1>
      <p className="p-4">{children}</p>
    </div>
  );
}
