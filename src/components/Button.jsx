export default function Button({ onClick, children }) {
  return (
    <button className="button-allwhite" onClick={onClick}>
      {children}
    </button>
  );
}
