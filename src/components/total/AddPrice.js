
const AddPrice = ({ add, price,addLength}) => {
  
  return (
    <div className={"planType stop_effect  lh"}>
      <div className={"txt"}>
        <p className={"fTxt"}>{add}</p>
      </div>
      <div>
        <p className={"prc prc2"}>
          ${price}/{addLength}
        </p>
      </div>
    </div>
  );
};

export default AddPrice;
