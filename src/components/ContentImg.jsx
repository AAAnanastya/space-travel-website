export default function ContentImg({ imgStyle, element, imgAdditionalStyling }) {
  return (
    <div className={imgStyle}>
      <img src={element.image} alt={element.title} />
      {imgAdditionalStyling !== undefined && <div className={imgAdditionalStyling}></div>}
    </div>
  );
}
