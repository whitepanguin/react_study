import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {
    console.log("부모(product) 랜더링")

    const containerStyle = {
        width : "500px",
        height : "300px",
        margin:"20px auto"
    };
    const productStyle = {
        border :"1px solid lightgray",
        padding :"30px",
        lineHeight:"1.3"
    };
    const divStyle ={
        border :"1px solid blue",
        height :"60px",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:"20px",
        padding:"20px",
    };


    const pStyle = {lineHeight:0};
    const buttonStyle={width:"40px",height:"40px"};

    const [like, setLike]= useState(0);

    const [amount, setAmount]= useState(1);
    const [coupon, setCoupon]= useState(0);
    
    const amountMemo = useMemo(()=>{
        console.log("amount 연산"); return amount;
    },[amount]);

    const CouponMemo = useMemo(()=>{
        console.log("coupon 연산"); return coupon;
    },[coupon]);

    const props = {amount: amountMemo, coupon : CouponMemo};
  
    // useCallback
    const onClickToAddAmount = useCallback(()=>{setAmount(amount +1)},[amount]);
    const onClickToSubAmount = useCallback(()=>{setAmount(amount -1)},[amount]);
    const onClickToAddCoupon = useCallback(()=>{setCoupon(coupon +1)},[coupon]);
    const onClickToSubCoupon = useCallback(()=>{setCoupon(coupon -1)},[coupon]);

    return (
        <div style={containerStyle}>
            <div style={productStyle}>
                <p>[책] 재용이가 알려주는 건물 하나 사서 팔아서 부자되기 </p>
                <button onClick={()=>{setLike(like+1)}}>좋아요 {like}</button>
                <Amount 
                divStyle={divStyle}
                pStyle={pStyle}
                buttonStyle={buttonStyle}
                props={props}
                onClickToAddAmount={onClickToAddAmount}
                onClickToSubAmount={onClickToSubAmount}
                onClickToAddCoupon={onClickToAddCoupon}
                onClickToSubCoupon={onClickToSubCoupon}
                />
            </div>
        </div>
    );
};

export default ProductContainer;