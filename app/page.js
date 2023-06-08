import Form from '@/components/Form/Form';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Change your desktop wallpaper:</h2>
      <Form />
    </div>
  );
}
