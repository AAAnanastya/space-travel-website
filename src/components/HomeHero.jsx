import Button from './Button';
export default function HomeHero({ subtitle, title, buttonStyle, onButtonClick, children }) {
  return (
    <main className="hero-container">
      <div className="representation-container">
        <h5>{subtitle}</h5>
        <h1>{title}</h1>
        <p className="p-4">{children}</p>
      </div>
      <Button style={buttonStyle} onClick={onButtonClick}>
        EXPLORE
      </Button>
    </main>
  );
}
