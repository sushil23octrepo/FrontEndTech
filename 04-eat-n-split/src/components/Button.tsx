export default function Button({ children, onButtonClick }: any) {
  return (
    <button onClick={(e) => onButtonClick()} className="button">
      {children}
    </button>
  );
}
