import "./ItemListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <p>1</p>
    </div>
  );
};
