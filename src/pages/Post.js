import React from "react";
import {useForm} from "react-hook-form";
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from "../firebase-confic";
import { useNavigate } from "react-router-dom";  
import { useEffect } from "react";

const Post = ({isAuth}) =>{
  
const {register, handleSubmit, formState: { errors }} = useForm();

const postCollectionRef = collection(db, "posts");
let navigate = useNavigate();

const onSubmit = async (data) => {
  await addDoc(postCollectionRef, {
    title : data.title,
    postText : data.post,
    author : {name : auth.currentUser.displayName, id: auth.currentUser.uid}
  });
  navigate("/");
}

useEffect(()=>{
  if(!isAuth){
    navigate("/login");
  }
});

return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGp">
          <input
            placeholder="Title..."
           {...register("title", {required:true})}
          />
            {errors.title && <span style={{ color: "red" }}>Title is required</span>}
        </div>
        <div className="inputGp">
          <textarea
            placeholder="Post..."
            {...register("post", {required:true})}
          />
          {errors.post && <span style={{ color: "red" }}>Post is required</span>}
        </div>
        <button className="btnSubmit" onClick={handleSubmit(onSubmit)}> Submit Post</button>
      </div>
    </div>
    )
}

export default Post;

