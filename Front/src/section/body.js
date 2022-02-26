import React ,{useState,useEffect} from 'react'
import './card.css' 
import axios from 'axios'
import UpdateProduit from '../dashboard/update'
import {Link} from  'react-router-dom'

const Body = () => {
    const [product,setProduct] = useState([])
    const getAll = ()=>{
        axios.get('http://localhost:3003/frip/product/getAllproduct').then(res=>
        setProduct(res.data)
        )
    }
    useEffect(()=>{
        getAll()
    },[])

    const getItem =(id) =>{
      localStorage.setItem('id',id)
    }
    
    
    return( 
        <div >
             <h1 className="title">  Man clothes </h1>

             <div className="d1">
                   { product.map(el=>(
                     <main  >
                     <section className="card">
                       <div className="product-image">
                         <img src={el.photo}alt="OFF-white Red Edition" draggable="false" id="im" />
                       </div>
                       <div className="product-info">
                         
                         
                         <div className="price">{el.price}</div>
                       </div>
                       <br/>
                       <div className="btn">
                        <Link to={`/getOne/${el._id}`}> <button onClick={()=>getItem(el._id)} className="buy-btn">Buy Now</button> </Link>
                         <button className="fav">
                           
                           <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                             <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                           </svg>
                           
                         </button>
                         
                        
                       </div>
                        <br/>
     
                       <p >{el.productName}</p>
                     </section>
                     
                     <br/>
                     <br/>

                   </main>))}
             </div>
        </div>
    )
}
export default Body ;