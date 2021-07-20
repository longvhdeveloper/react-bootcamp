import moment from 'moment'

export default [
  {
    id: '1',
    description: 'Dum',
    notes: '',
    amount: 195,
    createAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    notes: '',
    amount: 208,
    createAt: moment(0).subtract(1, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit card',
    notes: '',
    amount: 6500,
    createAt: moment(0).add(1, 'days').valueOf(),
  },
]
