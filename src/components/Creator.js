function Creator(props) {
  return (
    <div className="creator_group">
      <img
        className="creator_image"
        src={props.creatorImage}
        alt={props.creatorName}
      ></img>
      <span className="span">
        Creation of <span className="creator_name">{props.creatorName}</span>
      </span>
    </div>
  );
}

export default Creator;
