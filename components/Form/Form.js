'use client';

import styles from './form.module.css';

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { desktop: e.target[0].value };
    console.log(data);
    await fetch('https://863f-5-197-235-238.ngrok-free.app', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type='text' className={styles.input} />
      <button type='submit' className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
