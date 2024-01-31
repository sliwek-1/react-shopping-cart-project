import { useState } from 'react'
import { ShopList } from "../components/shopList"
import { cartContext } from "../context/cartContext"
import { ShoppingCart } from '../components/shoppingCart'
import { Button } from 'react-bootstrap'

export function Shop({jsonData}) {
   const [items, setItems] = useState([])
   const [show, setShow] = useState(false)

   const handleCloseCanvas = () => setShow(false) 
   const handleOpenCanvas = () => setShow(true)

   return (
    <>  
        <cartContext.Provider value={{items, setItems}}>
            <div className="d-flex flex-column align-items-center" style={{width: "100vw", height: "90vh"}}>
                <header className="d-flex justify-content-end align-items-center p-5" style={{width: "100vw", height: "10vh", borderTop: "1px solid rgba(0, 0, 0, 0.4)", position: "relative"}}>
                    <Button variant='white' style={{border: "1px solid rgba(0, 0, 0, 0.5)"}} onClick={handleOpenCanvas}>
                        Koszyk
                           {items.length > 0 ?<div style={{position: "absolute", 
                                                            bottom: "20px", right: "2%", 
                                                            backgroundColor: "royalblue", 
                                                            color: "white", 
                                                            padding: "1px", 
                                                            borderRadius: "25px", 
                                                            width: "25px"
                                                        }}>{items.length}</div> : ''} 
                    </Button>
                </header>
                <section className="d-flex justify-content-center mt-3" style={{width: "90vw"}}>
                    <ShopList jsonData={jsonData} />
                </section>
            </div>
            <ShoppingCart handleCloseCanvas={handleCloseCanvas} show={show} items={items}/>
        </cartContext.Provider>
    </>
   )
}