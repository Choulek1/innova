import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {useSelector} from'react-redux'
import {Link} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
const OneProduct = () => {
    const auth = useSelector((state) => state.signInStore);

    const [one,setOne] = useState({})
    const id = localStorage.getItem('id')
    const getOne = ()=>{
        axios.get(`http://localhost:3003/frip/product/getOneproduct/${id}`).then(res=>{
            setOne(res.data)
        })
    }
    useEffect(()=>{
        getOne()
    })
    const result = localStorage.getItem('token')
    const token = jwtDecode(result)
 
    const command = {
        productName:one.productName,
        productPhoto:one.photo,
        productPrice:one.price,
        fullName:token.fullName,

        photo :token.photo,
        email :token.email,
        phone:token.phone
       
    }
    const GeneraleCard = ()=>{
        return(
            <div className="oneget">
          
                  
                     <main  >
                     <section className="card">
                       <div className="product-image">
                         <img src={one.photo}alt="OFF-white Red Edition" draggable="false" id="im" />
                       </div>
                       <div className="product-info">
                         
                         
                         <div className="price">{one.price}</div>
                       </div>
                       <br/>
                       <div className="btn">
                         <Link to='/signIn'><button  className="buy-btn">Buy Now</button>   </Link>
                         <button className="fav">
                           
                           <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                             <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                           </svg>
                           
                         </button>
                         
                        
                       </div>
                        <br/>
     
                       <p >{one.productName}</p>
                     </section>
                     
                     <br/>
                     <br/>

                   </main> 
             </div>
        )
    }
   
const addCommand =()=>{
axios.post('http://localhost:3003/frip/command/addcommand',command).then(res=>{
    console.log(res.data,command.productPrice)
})
}
    const UserCard = ()=>{
      
        return(

            <div className="oneget">
          
                  
            <main  >
            <section className="card">
              <div className="product-image">
                <img src={one.photo}alt="OFF-white Red Edition" draggable="false" id="im" />
              </div>
              <div className="product-info">
                
                
                <div className="price">{one.price}</div>
              </div>
              <br/>
              <div className="btn">
                <button  className="buy-btn" onClick={addCommand}>Buy Now</button>  
                <button className="fav">
                  
                  <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                  </svg>
                  
                </button>
                
               
              </div>
               <br/>

              <p >{one.productName}</p>
            </section>
            
            <br/>
            <br/>

          </main> 
    </div>
        )
    }

    return (
        <div>
          <br/> <br/> <br/> <br/>  
          <h1>  Buy NoW</h1>
            {auth.authenticate ? UserCard() :GeneraleCard()}
             <br/> <br/> <br/>
        </div>
    )
}

export default OneProduct
