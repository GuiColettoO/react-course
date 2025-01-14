import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger";
}

export function Button({ color = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`}>Send-me</button>
  );
}
