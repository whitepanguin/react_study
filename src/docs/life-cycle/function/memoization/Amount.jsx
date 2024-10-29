import React from 'react';

const Amount = ({ 
    divStyle,
    pStyle,
    buttonStyle,
    props,
    onClickToAddAmount,
    onClickToSubAmount,
    onClickToAddCoupon,
    onClickToSubCoupon
}) => {
    console.log("자식 랜더링")
    const {amount, coupon}= props;
   
    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={onClickToSubAmount}>-</button>
            <p style={pStyle}>수령 : {amount}</p>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
            <button style={buttonStyle} onClick={onClickToSubCoupon}>-</button>
            <p style={pStyle}>쿠폰 : {coupon}</p>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
        </div>
    );
};

export default Amount;