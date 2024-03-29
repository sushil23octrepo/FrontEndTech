import style from "./Message.module.css";
export default function Message({ message }) {
  return (
    <p className={style.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}
