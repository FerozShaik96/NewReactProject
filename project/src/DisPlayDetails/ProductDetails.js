import React from "react";
const ProductDetails = (props) => {
  const DeleteTheData = (event) => {
    event.target.parentNode.remove();
  };
  return (
    <React.Fragment>
      <li>
        Prdoct I'D :- {props.id} -- Product Cost :- {props.amount} Product Name
        :-{props.name}
      </li>
      <button type="submit" onClick={DeleteTheData}>
        Remove Product
      </button>
    </React.Fragment>
  );
};
export default ProductDetails;
