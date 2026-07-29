import { Order } from "../components/Order"

export function Orders({ title }) {
    const orders = [
        {
            books: [
                {
                    image: 'book1',
                    name: 'SIN EATER',
                    author: 'Magan Campisi',
                    quantity: 30,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: crypto.randomUUID()
                }
            ],
            from: 'userName@gmail.com',
            id: crypto.randomUUID()
        },
        {
            books: [
                {
                    image: 'book1',
                    name: 'SIN EATER',
                    author: 'Magan Campisi',
                    quantity: 30,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: crypto.randomUUID()
                }
            ],
            from: 'userName@gmail.com',
            id: crypto.randomUUID()
        },
        {
            books: [
                {
                    image: 'book1',
                    name: 'SIN EATER',
                    author: 'Magan Campisi',
                    quantity: 30,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: crypto.randomUUID()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: crypto.randomUUID()
                }
            ],
            from: 'userName@gmail.com',
            id: crypto.randomUUID()
        }
    ]
    return (
        <div className="orders-container">
            {
                orders.map((order) => {
                    return (
                        <Order
                            key={order.id}
                            order={order}
                            title={title}
                        />
                    )
                })
            }
        </div>
    )
}