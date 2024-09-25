import CrewRepresentation from '../components/CrewRepresentation';
import PageTitle from '../components/PageTitle';

export default function CrewPage() {
  return (
    <div className="crew-page-container">
      <div className="content-page-container">
        <PageTitle pageNumber="02">Meet your crew</PageTitle>
        <CrewRepresentation />
      </div>
    </div>
  );
}
