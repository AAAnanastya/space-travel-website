export default function Button({ style, onClick, children }) {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
