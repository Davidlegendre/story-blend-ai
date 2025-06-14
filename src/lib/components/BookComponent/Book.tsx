import styles from "./Book.module.css";

export enum typeBook {
  simple = "simple",
  portada = "portada",
  ambos = "ambos",
  ambosMinimal = "ambosMinimal",
}

type ImagePosition = "cover" | "center" | "contain" | "custom";

interface Props {
  title?: string;
  subtitle?: string;
  authors?: string;
  type?: typeBook;
  color?: string;
  urlImage?: string;
  urlLogo?: string;
  logoWidth?: number;
  imagePosition?: ImagePosition;
  imageStyle?: React.CSSProperties;
}

const typeHeightTop: Record<typeBook, Partial<React.CSSProperties>> = {
  [typeBook.simple]: {},
  [typeBook.portada]: { height: "100%", maxHeight: "none" },
  [typeBook.ambos]: { maxHeight: "120px" },
  [typeBook.ambosMinimal]: { height: "7px", maxHeight: "none" },
};

const getTooltip = (
  title?: string,
  subtitle?: string,
  authors?: string
): string =>
  [title, subtitle && `: ${subtitle}`, authors && ` - ${authors}`]
    .filter(Boolean)
    .join("");

const getImageObjectFit = (
  pos: ImagePosition
): React.CSSProperties["objectFit"] => {
  switch (pos) {
    case "cover":
      return "cover";
    case "contain":
      return "contain";
    case "center":
      return "none";
    default:
      return undefined;
  }
};

export function Book({
  title = "Título",
  subtitle,
  authors,
  type = typeBook.ambos,
  color,
  urlImage,
  urlLogo,
  logoWidth = 22,
  imagePosition = "cover",
  imageStyle = {},
}: Props) {
  const isType = (...types: typeBook[]) => types.includes(type);

  const showTopImage = isType(
    typeBook.portada,
    typeBook.ambos,
    typeBook.ambosMinimal
  );
  const showTextSection = isType(
    typeBook.simple,
    typeBook.ambos,
    typeBook.ambosMinimal
  );

  const styleTopImage: React.CSSProperties = {
    background: color,
    ...typeHeightTop[type],
  };

  const computedImageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: getImageObjectFit(imagePosition),
    objectPosition: imagePosition === "center" ? "center" : undefined,
    ...imageStyle,
  };

  function BookImage() {
    if (!showTopImage) return null;

  return (
    <div className={styles.top_book} style={styleTopImage}>
      {urlImage && (
        <img
          src={urlImage}
          alt="portada-book"
          style={computedImageStyles}
          data-testid="book-image"
        />
      )}
    </div>
  );
  }

  function BookTextSection() {
    if (!showTextSection) return null;

    return (
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
                data-testid="book-logo"
              />
            )}
            {authors && <p className={styles.authors_book}>{authors}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.theme}>
      <div
        className={styles.book}
        title={getTooltip(title, subtitle, authors)}
        role="img"
        aria-label={getTooltip(title, subtitle, authors)}
        data-testid="book-component"
      >
        <div className={styles.back_book}></div>
        <div className={styles.pages_book}></div>

        <div className={styles.content_book}>
          <div className={styles.portada_book}>
            <BookImage />
            <BookTextSection />
          </div>
          <div className={styles.book_lomo}></div>
        </div>
      </div>
    </div>
  );
}