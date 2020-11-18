import React from "react";
import PropTypes from "prop-types";
import { Card } from "./styled";

const BankCard = ({ name }) => {
  return (
    <Card>
      <img
        src="https://www.designevo.com/res/templates/thumb_small/blue-and-yellow-earth.png"
        alt="BankName"
      />
      <h3>{ name }</h3>
    </Card>
  );
};

BankCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BankCard;
