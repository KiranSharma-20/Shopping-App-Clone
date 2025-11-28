import { createSlice } from "@reduxjs/toolkit";
import { MyntraData } from "../../data";


let initialState={
  products:MyntraData.products,
  orders:[],
  cart:[]
}

const productSlice=createSlice({
  name:"product",
  initialState,
  reducers:{
    setProducts:(state,action)=>{
      state.products=action.payload;

    },
    
    setOrders:(state,action)=>{
      state.orders=action.payload;

    },
    
    setCart:(state,action)=>{
      state.cart=action.payload;

    },


  }

})


export const {setProducts,setOrders,setCart}=productSlice.actions;
export default productSlice;

