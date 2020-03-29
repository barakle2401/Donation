import React from "react";
import "./gallery.css";

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-dog-body">
        <p className="date">March 21 2015</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      </div>
    );
  }
}
export default CardBody;