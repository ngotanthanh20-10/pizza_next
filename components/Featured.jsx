import styles from "../styles/Featured.module.css";
import Image from "next/image";
import react, { useState } from "react";

const Featured = () => {
  const [featured, setFeatured] = useState(0);

  const images = [
    "/img/featured0.jpg",
    "/img/featured1.jpg",
    "/img/featured2.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") setFeatured(featured !== 0 ? featured - 1 : 2);
    if (direction === "r") setFeatured(featured !== 2 ? featured + 1 : 0);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * featured}vw)` }}
      >
        {images.map((img, item) => (
          <div className={styles.imgContainer} key={item}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
