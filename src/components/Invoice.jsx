import React, { useState } from 'react'
import InvoiceForm from './InvoiceForm.jsx'
import InvoiceList from './InvoiceList.jsx'

const Invoice = () => {
    const[items,setItem]=useState([
        {
            id:1,
            name:"Apple",
            price:500
        },
        {
            id:2,
            name:"Orange",
            price:600
        },
        {
            id:3,
            name:"Mango",
            price:1500
        },
        {
            id:4,
            name:"Banana",
            price:300
        }
    ]);
    const [lists,setList]=useState([]);

    const addList=(itemId,quantity)=>{
        const currentItem=items.find(item=>item.id==itemId);
        const isExitinList=lists.find(list=>list.item.id===currentItem.id)

        if(isExitinList){
            setList(lists.map(list=>{
                if(list.item.id===currentItem.id){
                    list.quantity+= quantity;
                    list.cost=currentItem.price*list.quantity;
                }
                return list;
            }))
        }else{
            const newList={
                id:Date.now(),
                item:currentItem,
                quantity,
                cost: currentItem.price*quantity,
            }
            setList([...lists,newList]);
        };

        };

        const increaseList=(id)=>{
            setList(lists.map(list=>{
                if(list.id===id){
                    list.quantity+=1;
                    list.cost=list.item.price*list.quantity;
                }
                return list;

            }));
        };
        const decreaseList=(id)=>{
            setList(lists.map(list=>{
                if(list.id===id && list.quantity>1){
                    list.quantity-=1;
                    list.cost=list.item.price*list.quantity;
                }
                return list;

            }));
        };


       


    
  return (
   <>
    <div className="">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="mt-5 mb-3 text-center"> Invoice App </h3>
                </div>
                <InvoiceForm items={items} addList={addList}/>
                <InvoiceList lists={lists} increaseList={increaseList} decreaseList={decreaseList}/>
            </div>
        </div>

    </div>
   
   </>
    
  )
}

export default Invoice
