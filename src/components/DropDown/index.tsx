import { Row } from "react-bootstrap";
import styles from "./styles.module.scss";

interface Props {
  dropdownValues: string[];
  onClick?: (ev: any) => void;
  title: string;
  drop?: boolean;
}

const FlushExample: React.FC<Props> = ({
  dropdownValues,
  title,
  onClick,
  drop,
}) => {
  let className = ".drop";
  if (!drop) className += ".out";

  return (
    <div className={styles.container + ` ${drop ? styles.drop : styles.out}`}>
      {dropdownValues.map((item: string) => (
        <Row key={item} onClick={onClick} id={title}>
          {item}
        </Row>
      ))}
    </div>
  );
};

export default FlushExample;
