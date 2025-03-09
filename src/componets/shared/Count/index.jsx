import './index.scss'

export default function Count() {
  return (
    <div className="count">
      <button className="count__btn">-</button>

      <span className="count__numb">3</span>

      <button className="count__btn">+</button>
    </div>
  );
}
