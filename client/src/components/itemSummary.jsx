export function ItemSummary({i, title, src, price, quantity}) {
    return (
        <>
            <tr key={crypto.randomUUID()} className="text-align-center">
                <td>
                    {i + 1}.
                </td>
                <td>
                    <img src={`/images/${src}`} style={{width: "3vw", height: "7vh"}}/>
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {quantity}
                </td>
                <td>
                    {price * quantity}
                </td>
            </tr>
        </>
    )
}