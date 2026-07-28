import { v4 as uuidv4 } from 'uuid';
export const cards = [
    {
        title: 'TOTAL ITEMS',
        number: 247,
        unit: null,
        details: 'Active inventory lines',
        id: uuidv4()
    },
    {
        title: 'LOW STOCK',
        number: 32,
        unit: null,
        details: 'Reorder soon',
        state: 'LOW',
        id: uuidv4()
    },
    {
        title: 'OUT OF STOCK',
        number: 14,
        unit: null,
        details: 'Unavailable',
        state: 'OUT',
        id: uuidv4()
    },
    {
        title: 'INVENTORY VALUE',
        number: '$48,291',
        unit: null,
        details: 'Total wholesale value',
        id: uuidv4()
    },
]