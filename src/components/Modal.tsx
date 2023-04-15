import "./Modal.css";

type Props = {
  msg: string;
  onClick(): void;
};

export default function Modal({ msg, onClick }: Props) {
  return (
    <div className="modal">
      <div className="modal-contents">
        <p>{msg}</p>
        <button onClick={onClick}>Play again</button>
      </div>
    </div>
  );
}
