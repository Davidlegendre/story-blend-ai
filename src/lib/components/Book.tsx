import styles from "./css/Book.module.css";

export enum typeBook {
  simple = "simple",
  portada = "portada",
  ambos = "ambos",
  ambosMinimal = "ambosMinimal",
}

interface Props {
  title?: string;
  subtitle?: string;
  authors?: string;
  type?: typeBook;
  color?: string;
  urlImage?: string;
  urlLogo?: string;
  logoWidth?: number;
}

export function Book({
  title = "Titulo",
  subtitle = undefined,
  authors = undefined,
  type = typeBook.ambos,
  color = undefined,
  urlImage = undefined,
  urlLogo = undefined,
  logoWidth = 22
}: Props) {
  const tooltip = `${title ?? ""}${subtitle ? ": " : ""}${subtitle ?? ""}${
    authors ? " - " : ""
  }${authors ?? ""}`;

  const typeHeightTop = [
    {
      type: typeBook.portada,
      height: "100%",
      "max-height": "none",
    },
    {
      type: typeBook.ambos,
      "max-height": "120px",
    },
    {
      type: typeBook.ambosMinimal,
      height: "7px",
      "max-height": "none",
    },
  ];

  const stylePortadaTopBook = type !== typeBook.simple && {
    backgroundColor: color,
    height: typeHeightTop.find((e) => e.type === type).height,
    "max-height": typeHeightTop.find((e) => e.type === type)["max-height"],
  };

  return (
    <div className={styles.theme}>
      <div title={tooltip} className={styles.book}>
        <div className={styles.back_book}></div>
        <div className={styles.pages_book}></div>
        <div className={styles.content_book}>
          <div className={styles.portada_book}>
            {[typeBook.portada, typeBook.ambos, typeBook.ambosMinimal].includes(
              type
            ) && (
              <div className={styles.top_book} style={stylePortadaTopBook}>
                {urlImage && <img src={urlImage} alt="portada-book"></img>}
              </div>
            )}
            {[typeBook.simple, typeBook.ambos, typeBook.ambosMinimal].includes(
              type
            ) && (
              <div className={styles.title_book}>
                <div className={styles.title_book_texts}>
                  <p className={styles.title_book_title}>{title}</p>
                  <p className={styles.title_book_subtitle}>{subtitle}</p>
                </div>
                {(urlLogo || authors) && (
                    <div className={styles.authors_book_section}>
                      {urlLogo && (
                        <img
                          className={styles.vercel_icon}
                          width={logoWidth}
                          src={urlLogo}
                          alt="logo"
                        ></img>
                      )}
                      {authors && (
                        <p className={styles.authors_book}>{authors}</p>
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
          <div className={styles.book_lomo}></div>
        </div>
      </div>
    </div>
  );
}
