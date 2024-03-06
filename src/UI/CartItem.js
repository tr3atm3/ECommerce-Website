import classes from "./CartItem.module.css";

const CartItem = ({ item, toRemoveItem }) => {
  return (
    <div className={classes.cartItem}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={item.imageUrl}
          alt="different colors"
        />
      </div>

      <h3>{item.title}</h3>
      <h4>{item.price}</h4>
      <h4>{item.quantity}</h4>
      <button className={classes.removeBtn} onClick={toRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
