import React from "react";
import CardImage from "./CardImage";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "images/image-equilibrium.jpg",
      alt: "NFTs",
      title: null,
      description: null,
      price: null,
      time: null,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="image_container">
          {" "}
          <CardImage imageSource={this.state.image} imageAlt={this.state.alt} />
        </div>
      </div>
    );
  }
}

export default Card;
