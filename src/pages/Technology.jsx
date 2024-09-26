import PageTitle from '../components/PageTitle';
import TechnologyRepresentation from '../components/TechnologyRepresentation';

export default function TechnologyPage() {
  return (
    <div className="technology-page-container">
      <div className="technology-page-content-container">
        <PageTitle pageNumber="03">Space Launch 101</PageTitle>
        <TechnologyRepresentation />
      </div>
    </div>
  );
}
