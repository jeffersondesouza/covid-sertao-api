import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    ref: '101349',
    contact: '88-8888-9090',
    name: 'Ekaterina Tankova',
    createdAt: moment(1555016400000).format('DD/MM/YYYY'),
    updateAt: moment(1555016400000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1555016400000), 'days'),
    status: 1,
  },
  {
    id: uuid(),
    ref: '101348',
    contact: '88-8888-9090',
    name: 'Cao Yu',
    createdAt: moment(1555016400000).format('DD/MM/YYYY'),
    updateAt: moment(1555016400000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1555016400000), 'days'),
    status: 2,
  },
  {
    id: uuid(),
    ref: '101347',
    contact: '88-8888-9090',
    name: 'Alexa Richardson',
    createdAt: moment(1554930000000).format('DD/MM/YYYY'),
    updateAt: moment(1554930000000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1554930000000), 'days'),
    status: 2,
  },
  {
    id: uuid(),
    ref: '101346',
    contact: '88-8888-9090',
    name: 'Anje Keizer',
    createdAt: moment(1554757200000).format('DD/MM/YYYY'),
    updateAt: moment(1554757200000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1554757200000), 'days'),
    status: 1,
  },
  {
    id: uuid(),
    ref: '101345',
    contact: '88-8888-9090',
    name: 'Clarke Gillebert',
    createdAt: moment(1554670800000).format('DD/MM/YYYY'),
    updateAt: moment(1554670800000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1554670800000), 'days'),
    status: 3,
  },
  {
    id: uuid(),
    ref: '101344',
    contact: '88-8888-9090',
    name: 'Adam Denisov',
    createdAt: moment(1554670800000).format('DD/MM/YYYY'),
    updateAt: moment(1554670800000).format('DD/MM/YYYY'),
    monitoringDays: moment().diff(moment(1554670800000), 'days'),
    status: 4,
  },
];
