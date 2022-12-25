import React, { useRef } from 'react'

const InvoiceForm = ({items,addList}) => {
  const formRef=useRef();
  const handleSubmit=event=>{
    event.preventDefault();
    const formData= new FormData (formRef.current);
    addList(formData.get("item_id"),parseInt(formData.get("quantity")));
    formRef.current.reset();
  }
  return (
   <>
   <div className="d-inline-block d-print-none border rounded p-3">
    <form ref={formRef} onSubmit={handleSubmit} id="create" name=""></form>
   <div className="row g-3 ">
    <div className="col-12 col-md-4">
    <label className='form-label' htmlFor="">Select Item</label>
    <select form='create' className='form-select' name="item_id" id="">
       {items.map((item)=>(
         <option key={item.id} value={item.id}>{item.name}</option>
       ))}
    </select>
    </div>
    <div className="col-12 col-md-4">
    <label className='form-label' htmlFor="">Quantity</label>
    <input name='quantity' form='create' className='form-control' type="number" required />
    </div>
    <div className="col-12 col-md-4 d-flex ">
        <button form='create' className=' btn  btn-primary w-100 align-self-end me-1 '>AddItem</button>
        <button form='create' onClick={print} className=" btn  btn-primary w-100 align-self-end">Print</button>


    </div>

   </div>
   
   </div>
   
   
   
   </>
  )
}

export default InvoiceForm
