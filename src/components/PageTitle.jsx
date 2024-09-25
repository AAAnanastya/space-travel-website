export default function PageTitle({ pageNumber, children }) {
  return (
    <div className="page-title-container">
      <h5 className="page-number">{pageNumber}</h5>
      <h5 className="page-title">{children}</h5>
    </div>
  );
}
