import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./styled";
import { DataRouteContext } from "../../context/DataRouteContext";

const BankCard = ({bank}) => {
  const {setBank} = useContext(DataRouteContext);
  const { name } = bank;
  return (
    <Card onClick={() => setBank(bank)}>
      <img
        src="https://www.designevo.com/res/templates/thumb_small/blue-and-yellow-earth.png"
        alt="BankName"
      />
      <h3>{name}</h3>
    </Card>
  );
};

BankCard.propTypes = {
  bank: PropTypes.object.isRequired,
};

export default BankCard;
