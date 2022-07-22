import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [featured, setFeatured] = useState(0);

  const images = [
    "/img/featured0.jpg",
    "/img/featured1.jpg",
    "/img/featured2.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") setFeatured(index !== 0 ? index - 1 : 2);
    if (direction === "r") setFeatured(index !== 2 ? index + 1 : 0);
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
      <div className={styles.wrapper}>
        {images.map((img, item) => (
          <div className={styles.imgContainer} key={item}>
            <Image src="/img/featured1.jpg" alt="" layout="fill" />
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
