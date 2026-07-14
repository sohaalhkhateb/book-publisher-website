import { InventoryBox } from "./InventoryBox"

export function InventoryBoxs() {
    const boxs = [
        {
            title: 'TOTAL ITEMS',
            number: 247,
            details: 'Active inventory lines',
            id= crypto.randomUUID()
        },
        {
            title: 'LOW STOCK',
            number: 32,
            details: 'Reorder soon',
            state: 'Low',
            id= crypto.randomUUID()
        },
        {
            title: 'OUT OF STOCK',
            number: 14,
            details: 'Unavailable',
            state: 'out',
            id= crypto.randomUUID()
        },
        {
            title: 'INVENTORY VALUE',
            number: '$48,291',
            details: 'Total wholesale value',
            id= crypto.randomUUID()
        },
    ]
    return (
        <div className="inventort-boxs-container">
            {
                boxs.map((box) => {
                    return(
                        <InventoryBox
                            key={box.id}
                            box={box}
                        >
                            {box.state? box.state : null}
                        </InventoryBox>
                    )
                })
            }
        </div>
    )
}