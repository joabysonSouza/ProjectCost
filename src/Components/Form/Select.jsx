import React from "react";
import styles from "./Select.module.css";

const Select = ({ text, name, option, handleOnchange, value }) => {
  return (
    <div className={styles.select}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnchange}
        value={value || ""}
      >
        <option value=""> Selecione a categoria</option>
        {option.map((opt) => (
          <option value={opt.id} key={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;