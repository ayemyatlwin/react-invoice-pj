import React from 'react'

const InvoiceList = ({lists,increaseList,decreaseList}) => {
  return (
    <>
    {lists.length>0 && (
      <table className="table">
      <thead>
      <tr>
        <th>Item</th>
        <th className='text-end'>Price</th>
        <th className='text-end'>Quantity</th>
        <th className='text-end'>Cost</th>
      </tr>
      </thead>
      <tbody>
        {lists.map((list)=>(
       <tr key={list.id}>
         <td>{list.item.name}</td>
         <td className='text-end'>{list.item.price}</td>
         <td className='text-end'>
          <button  onClick={decreaseList.bind(null,list.id)}  className='d-print-none btn btn-sm btn-outline-primary mx-1'>-
          </button>
          {list.quantity}
          <button onClick={increaseList.bind(null,list.id)}  className='d-print-none btn btn-sm btn-outline-primary mx-1'>+
          </button>

          </td>
         <td className='text-end'>{list.cost}</td>
        </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} className="text-center">Total</td>
          <td className='text-end'>{lists.reduce((pv,cv)=>pv+cv.cost,0)} </td>
        </tr>
      </tfoot>
      
      
      
      
      </table>
 
         
    
    )}

    </> 





)
}

export default InvoiceList