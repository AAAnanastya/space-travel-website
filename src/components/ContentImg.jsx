export default function ContentImg({ imgStyle, element, imgAddintionalStyling }) {
  return (
    <div className={imgStyle}>
      <img src={element.image} alt={element.title} />
      {imgAddintionalStyling ? <div className={imgAddintionalStyling}></div> : undefined}
    </div>
  );
}
