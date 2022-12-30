import React,{useState} from 'react'
import Modals from './Modals';
const Card = ({book}) => {
    console.log(book)
    const [show, setshow] = useState(false);
    const [bookItem, setbookItem] = useState()
  return (
    <>
    {
        book.map((item)=>{
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
         let amount=item.saleInfo.listPrice &&item.saleInfo.listPrice.amount
            if(thumbnail!=undefined && amount!=undefined)
          {
           return(   <>
                <div className='card' onClick={()=>{
                    {setshow(true);setbookItem(item)}
                }}>
        <img src={thumbnail} alt=""/>
        <div className='bottom'>
            <h3 className='title'>{item.volumeInfo.title}</h3>
            <p className='amount'>&#8377;{amount}</p>
        </div>
        </div>
        <Modals show={show} item={bookItem} onClose={()=>setshow(false)}/>
        </>
        )
          }  
          
        })
    }
       
    </>
  )
}

export default Card