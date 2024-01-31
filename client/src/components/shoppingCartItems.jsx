import { CartItem } from "./cartItem"
import { cartContext } from '../context/cartContext'
import { useContext, useEffect } from 'react'

export function ShoppingCartItems(){
    const {items, setItems} = useContext(cartContext);

    function deleteFromCart(id) {
        let element = items.findIndex(item => item.id === id)
        let newArrayItemsCart = items.filter((item, i) => i !== element)
        setItems(newArrayItemsCart)
    }

    function decreaseQuantity(id) {
        const updatedItems = items.map(item => {
            if(item.quantity <= 1){
                return {...item, quantity: 1}
            }else {
                if(item.id == id) {
                    return {...item, quantity: item.quantity - 1}
                }
            }
            return item
        })

        setItems(updatedItems)
    }
    
    function increaseQuantity(id) {
        const updatedItems = items.map(item => {
            if(item.id == id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })

        setItems(updatedItems)
    }

    return (
        <>
            {items.map(item => {
               return <CartItem item={item} deleteFromCart={deleteFromCart} setItems={setItems} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}/>
            })}
        </>
    )
}