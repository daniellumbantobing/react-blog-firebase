import React,{useState, useEffect} from "react";
import {getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import {db, auth} from "../firebase-confic";
const Home = ({isAuth}) =>{
    
    const [load, setLoad] = useState(false);
    const [dataLists, setdataLists] = useState(null)
   
    useEffect(() => {
        const getdatas = async () =>{
            try{
                const data = await getDocs(collection(db, "posts")); 
                let datas = data.docs.map((doc)=> ({...doc.data(), id: doc.id}));
               setdataLists(datas);
            }catch(error){
                console.log(error)
            }
           
        };
        getdatas();
    }, [])

    const deletePost  = async (id) => {
        try{
           setLoad(false)
            const postDoc = doc(db, "posts", id);
            await deleteDoc(postDoc);
            window.location.pathname = "/";
        }catch(error){
            console.log(error)
        }
    };

  
    if(!dataLists|| load){
        return(
            <div className="homePage">
            <div className="loader"></div>
            </div>
        );
    }
    
    return (
        <div className="homePage">
         {dataLists.map((data, i)=>{
              return (
                <div className="post" key={i}>
                  <div className="postHeader">
                    <div className="title">
                      <h1> {data.title}</h1>
                    </div>
                    <div className="deletePost">
                      {isAuth && data.author.id === auth.currentUser.uid && (
                        <button
                          onClick={() => {
                            deletePost(data.id);
                          }}
                        >
                          {" "}
                          &#128465;
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="postTextContainer"> {data.postText} </div>
                  <h3>@{data.author.name}</h3>
                </div>
              );
              
           })}
        </div>
    )
}

export default Home;


