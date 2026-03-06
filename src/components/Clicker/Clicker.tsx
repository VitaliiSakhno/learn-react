import css from "../Clicker/Clicker.module.css";

interface ClickerProps {
  clicks: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export default function Clicker({
  clicks,
  onIncrement,
  onDecrement,
  onReset,
}: ClickerProps) {
  return (
    <>
      <h2 className={css.clickerTitle}>The number changes on each click</h2>
      <div className={css.clickerButtonsContainer}>
        <button className={css.clickerButton} onClick={onDecrement}>
          -
        </button>
        <button className={css.clickerButton} onClick={onIncrement}>
          +
        </button>
        {(clicks > 1 || clicks < -1) && (
          <button className={css.clickerButton} onClick={onReset}>
            Reset
          </button>
        )}
      </div>
      <p className={css.clickerText}>You clicked {clicks} times</p>
    </>
  );
}
