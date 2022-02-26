import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import axios from 'axios'
const AddProduit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [product,setProduct]=useState({
        productName:'',
        photo:'',
        price:'',
        
    })
    const produit = () =>(
        axios.post(`http://localhost:3003/frip/product/addProduct`,product).then(res=>{
          console.log(res.data)
        })
      )

    return (
        <div className="">
 

        <h1 className="want">Welcome To Dashbord</h1>
        <br/>
      <svg id="button-click" xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="80" height="80" fill="currentColor" className="bi" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<form onSubmit={produit} >
<input type='text' placeholder='productName' onChange={(e)=>{setProduct({...product,productName:e.target.value})}} />
<input type='text'  placeholder='photo' onChange={(e)=>{setProduct({...product,photo:e.target.value})}}  />
<input type='text' placeholder='price'  onChange={(e)=>{setProduct({...product,price:e.target.value})}} />
<input type='submit' />
 </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
     
        </Modal.Footer>
      </Modal>
 </div> 
    )
}

export default AddProduit