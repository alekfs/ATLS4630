import './MenuListItem.css'

type MenuListItemProps = {
    itemName: string
    itemPrice: number
    numInCart: number
}

export default function MenuListItem({itemName, itemPrice, numInCart}: MenuListItemProps) {
    return (
        <div className='menuListItem'>
            <div className='menuListItemTopRow'>
                <span>{itemName}</span>

                <span>{itemPrice}</span>
            </div>
            <div className='menuListItemBottomRow'>
                <span>
                {
                    numInCart === 0 ? (
                        'None in cart'
                    ) : (
                        `${numInCart} in cart`
                    )}
                </span>
                <button className='addCartButton'></button>
            </div>
        </div>
    )
}