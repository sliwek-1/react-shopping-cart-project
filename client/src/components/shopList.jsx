import { ShopItem } from "./shopItem"

export function ShopList({jsonData}) {
    return (
        <>
            {jsonData.length <= 0 ? <p>Loading...</p> : jsonData.map(item => {
                return <ShopItem 
                    id={item.id} 
                    title={item.title}
                    price={item.price}
                    src={item.src}
                    description={item.description}
                />
            })}
        </>
    )
} 