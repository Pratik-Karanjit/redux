import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddress, changeAge, changeName } from '../features/counterSlice';
import { changeCity, changeProvince } from '../features/addressSlice';
import { changePrice, changeProductName, changeQuantity } from '../features/productSlice';
import { changeDescription, changeTitle } from '../features/blogSlice';
import { changeCourse, changeModule } from '../features/courseSlice';

const Project = () => {
  const dispatch = useDispatch();
  const info = useSelector((store) => store.info);
  
  let addressData = useSelector((store) => {
    return (
      store.address
      )
    })
    let productData = useSelector((store) => {
      return (
        store.product
        )
      })
    let blogData = useSelector((store) => {
      return (
        store.blog
        )
      })
      let coursedata = useSelector((store) => {
        return (
          store.course
          )
        })
      console.log(coursedata);
      
  return (
    <div>
      <div>{info.name}</div>
      <div>{info.age}</div>
      {/* <div>{info.address}</div> */}
      <div>City: {addressData.city}</div>
      <div>Province: {addressData.province}</div>
      <div>Product Name: {productData.name}</div>
      <div>Product Price: {productData.price}</div>
      <div>Product Quantity: {productData.quantity}</div>
      <div>Blog Title: {blogData.title}</div>
      <div>Blog Description: {blogData.description}</div>
      <div>Course Name: {coursedata.CourseName}</div>
      <div>Course Module: {coursedata.module}</div>

      <button onClick={() => {
        dispatch(changeName("hari"));
      }}>
        Change Name
      </button>
      <button onClick={() => {
        dispatch(changeAge(30));
      }}>
        Change Age
      </button>
      <button onClick={() => {
        dispatch(changeCity("Bhaktapur"));
      }}>
        Change city
      </button>
      <button onClick={() => {
        dispatch(changeProvince("Province 2"));
      }}>
        Change province
      </button>
      <button onClick={() => {
        dispatch(changeProductName("Samsung"));
      }}>
        Change product name
      </button>
      <button onClick={() => {
        dispatch(changePrice(200));
      }}>
        Change product price
      </button>
      <button onClick={() => {
        dispatch(changeQuantity(20));
      }}>
        Change product quantity
      </button>
      <button onClick={() => {
        dispatch(changeTitle("This is blog title."));
      }}>
        Change blog title
      </button>
      <button onClick={() => {
        dispatch(changeDescription("This is blog description."));
      }}>
        Change product quantity
      </button>

      <button onClick={() => {
        dispatch(changeCourse("Multimedia."));
      }}>
        Change course
      </button>
      <button onClick={() => {
        dispatch(changeModule("xzy123."));
      }}>
        Change module
      </button>
    </div>
  );
};

export default Project;
