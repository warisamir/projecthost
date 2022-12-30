import React,{useState} from 'react';
import Card from './Card';
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData,setData]=useState([]);
  const searchBook =(evt)=>{
    if(evt.key=="Enter"){
axios.get(`https://www.googleapis.com/books/v1/volumes?q=search&key=${process.env.REACT_APP_KEY}&maxResults=40`)
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
  }
}
  return (
    <>
        <div className='header' >
            <div className='row1'>
            <h1>Aroom without book is like<br/>a day without soul</h1>
            </div>
            <div className='row2'>
            <h2>find you book</h2>
            <div className='search'>
            <input type='text' placeholder="enter you book name" value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook}/>
            <button><i class="fas fa-search">search</i></button>
           </div>
            <img src="./images/bg2.png" alt="books"/>
           </div>
            
        </div>
        <div className='container'>
       { <Card book={bookData}/>
       }
         </div>
    </>
  )
}

export default Main