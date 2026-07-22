import { AssignBook } from "./AssignBook"

export function AssignBooks({ assignBooks }) {
    return (
        <>
            {
                assignBooks.map((assignBook) => {
                    return (
                        <AssignBook
                            title={assignBook.title}
                            image={assignBook.image}
                            number={assignBook.number}
                            writer={assignBook.writer}
                            key={assignBook.id}
                        />
                    )
                })
            }
        </>
    )
}