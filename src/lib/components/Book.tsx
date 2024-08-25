import styles from "./css/Book.module.css";

export enum typeBook {
  simple = "simple",
  portada = "portada",
  ambos = "ambos",
}

interface Props {
  text: string;
  showLogo?: boolean;
  type?: typeBook;
  color?: string;
  urlImage?: string;
  urlLogo?: string;
}

export function Book({
  text,
  showLogo = true,
  type = typeBook.ambos,
  color = undefined,
  urlImage = undefined,
  urlLogo = "https://img.icons8.com/?size=100&id=93961&format=png&color=000000"
}: Props) {
  const portadaStyle = [styles.portada_book];
  switch (type) {
    case typeBook.simple:
      portadaStyle.push(styles.expand_part_top);
      break;
    case typeBook.portada:
      portadaStyle.push(styles.expand_part_title);
      break;
  }

  const getStyles = (style: string[]) => {
    return style.join(" ");
  };

  return (
    <div className={styles.theme}>
      <div className={styles.book}>
        <div className={styles.back_book}></div>
        <div className={styles.pages_book}></div>
        <div className={styles.content_book}>
          <div className={getStyles(portadaStyle)}>
            <div className={styles.top_book} style={{ backgroundColor: color }}>
              {urlImage ? <img src={urlImage} alt="portada-book"></img> : ""}
            </div>
            <div className={styles.title_book}>
              <p>{text}</p>
              {showLogo ? (
                <img
                  className={styles.vercel_icon}
                  width={24}
                  src={urlLogo}
                  alt="logo"
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styles.book_lomo}></div>
        </div>
      </div>
    </div>
  );
}
