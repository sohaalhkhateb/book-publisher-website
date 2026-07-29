import { Products } from '../home/Products'
import { AssignBooks } from './AssignBooks';
import book1Image from '../../assets/images/book1.png'
import book2Image from '../../assets/images/book2.png'
import book3Image from '../../assets/images/book3.png'
import './AssignComponent.css'
export function AssignComponent() {
  const assignBooks = [
    {
      title: 'SUN EATER',
      image: book1Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'soha',
          id: crypto.randomUUID()
        },
        {
          name: 'sam',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book2Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    }, {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'sara',
          id: crypto.randomUUID()
        },
      ],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'doaa',
          id: crypto.randomUUID()
        },
        {
          name: 'ali',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'soha',
          id: crypto.randomUUID()
        },
        {
          name: 'sam',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'soha',
          id: crypto.randomUUID()
        },
        {
          name: 'sam',
          id: crypto.randomUUID()
        }
      ],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: crypto.randomUUID()
    },
  ];
  return (
    <div className="assign-component-container">
      <AssignBooks
        assignBooks={assignBooks}
      />
    </div>
  )
}