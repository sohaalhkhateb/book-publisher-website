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
                    id: uuidv4()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: uuidv4()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: uuidv4()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: uuidv4()
                }
            ],
            from: 'userName@gmail.com',
            id: uuidv4()
        },
        {
            books: [
                {
                    image: 'book1',
                    name: 'SIN EATER',
                    author: 'Magan Campisi',
                    quantity: 30,
                    id: uuidv4()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: uuidv4()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: uuidv4()
                }
            ],
            from: 'userName@gmail.com',
            id: uuidv4()
        },
        {
            books: [
                {
                    image: 'book1',
                    name: 'SIN EATER',
                    author: 'Magan Campisi',
                    quantity: 30,
                    id: uuidv4()
                },
                {
                    image: 'book1',
                    name: 'Nature and Value',
                    author: 'Akeel Bilgrami',
                    quantity: 40,
                    id: uuidv4()
                },
                {
                    image: 'book3',
                    name: 'The Promise of Psychedelics',
                    author: 'Beter mental',
                    quantity: 39,
                    id: uuidv4()
                }
            ],
            from: 'userName@gmail.com',
            id: uuidv4()
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