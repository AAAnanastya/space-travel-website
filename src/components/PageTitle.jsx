export default function PageTitle({ pageNumber, children }) {
  return (
    <div className="page-title-container">
      <h2 className="page-number">{pageNumber}</h2>
      <h2 className="page-title">{children}</h2>
    </div>
  );
}
