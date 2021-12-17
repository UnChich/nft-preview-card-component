function CardImage(props) {
  return (
    <img
      className="card_image"
      src={props.imageSource}
      alt={props.imageAlt}
    ></img>
  );
}

export default CardImage;
