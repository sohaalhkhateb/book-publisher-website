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
          id: uuidv4()
        },
        {
          name: 'sam',
          id: uuidv4()
        }
      ],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book2Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
    }, {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: true,
      assignedEmp: [
        {
          name: 'sara',
          id: uuidv4()
        },
      ],
      id: uuidv4()
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
          id: uuidv4()
        },
        {
          name: 'ali',
          id: uuidv4()
        }
      ],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
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
          id: uuidv4()
        },
        {
          name: 'sam',
          id: uuidv4()
        }
      ],
      id: uuidv4()
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
          id: uuidv4()
        },
        {
          name: 'sam',
          id: uuidv4()
        }
      ],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
    },
    {
      title: 'SUN EATER',
      image: book3Image,
      number: 10,
      writer: 'Megan campisi',
      assignedState: false,
      assignedEmp: [],
      id: uuidv4()
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