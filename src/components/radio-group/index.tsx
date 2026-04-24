"use client";
import styles from "./radio-group.module.scss";
type RadioGroupProps = {
  options: { id: string; name: string }[];
  selectedOptionId: string;
  setSelectedOptionId: (_id: string) => void;
  name?: string;
};
export const RadioGroup = ({
  options,
  selectedOptionId,
  setSelectedOptionId,
  name = "radio-group",
}: RadioGroupProps) => {
  return (
    <div className={styles.radioGroup}>
      {" "}
      {options.map(option => (
        <label
          key={option.id}
          className={styles.wrapper}
        >
          <input
            type='radio'
            name={name}
            value={option.id}
            checked={selectedOptionId === option.id}
            onChange={() => setSelectedOptionId(option.id)}
            className={styles.input}
          />
          <span className={styles.radio} />
          <span className={styles.label}>{option.name}</span>
        </label>
      ))}
    </div>
  );
};
