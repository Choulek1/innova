import axios from 'axios'
import {Modal,Button,Form} from 'react-bootstrap'
import React,{useState} from 'react'

const UpdateProduit = ({el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
const [input,setInput] = useState({

 id:el._id,
  productName:el.productName,
  photo:el.photo,
  price:el.price,
 
})
 
const updateProduit = (id) =>{
    axios.put(`http://localhost:3003/frip/product/updateProduct/${id}`,input).then(res=>{
        console.log(res.data)
    })
}

    return (
        <div>
        <Button  variant="info" onClick={handleShow}>
          Update
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form   onSubmit={()=>updateProduit(input.id)}>
                <input type='text' defaultValue={input.productName} onChange={(e)=>{setInput({...input,productName:e.target.value})}} />
                <input type='text' defaultValue={input.photo} onChange={(e)=>{setInput({...input,photo:e.target.value})}} />
                <input type='text' defaultValue={input.price} onChange={(e)=>{setInput({...input,price:e.target.value})}} />
             
             <input type='submit'  />
             </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="del"  onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>

        </div>

    )
}

export default UpdateProduit