import styles from "./css/Book.module.css";

export function Book() {
  return (
    <div className={styles.book}>
      <div className={styles.back_book}></div>
      <div className={styles.pages_book}></div>
      <div className={styles.content_book}>
        <div className={styles.portada_book}>
          <div className={styles.top_book}>
            <p>imagen o lo que sea</p>
            <div className={styles.book_lomo1}></div>
          </div>
          <div className={styles.title_book}>
            <div className={styles.book_lomo2}></div>
            <p>TITULO DEL LIBRO</p>
            <img
              className={styles.vercel_icon}
              width={18}
              src="https://img.icons8.com/?size=100&id=93961&format=png&color=000000"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
