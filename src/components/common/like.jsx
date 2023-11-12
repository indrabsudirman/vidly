import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"; // ES Module "as" syntax
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

// Input : Liked boolean
// Output onClick

class Like extends Component {
  render() {
    // const solid = <FontAwesomeIcon icon={faHeartSolid} />;
    // const regular = <FontAwesomeIcon icon={faHeartRegular} />;
    // const element = this.props.liked ? solid : regular;
    // return element;
    // const { liked } = this.props;
    // const icon = liked ? faHeartSolid : faHeartRegular;
    // return <FontAwesomeIcon icon={icon} />;
    return (
      <FontAwesomeIcon
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        icon={this.props.liked ? faHeartSolid : faHeartRegular}
      />
    );
  }
}

// const Like = () => {
//   return (
//     <FontAwesomeIcon
//       onClick={this.props.onClick}
//       style={{ cursor: "pointer" }}
//       icon={this.props.liked ? faHeartSolid : faHeartRegular}
//     />
//   );
// };

export default Like;
