import "./styles.css";

const LENGTH = 3;

export default function StackedComponent() {
  return (
    <div className="wrapper">
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div style={{   transform: `translateY(${i * 9}px) scale(${i*0.05+0.8}, 1)` }}
          className="card " key={i} />
      ))}
    </div>
  );
}