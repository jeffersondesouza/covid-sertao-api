import moment from 'moment';
import { Maybe } from 'helpers/functors';

const format = date => moment(date).format('DD/MM/YYYY');

const updatedAt = (history = []) => {
  const [lastUpdateData, ...rest] = history.reverse();

  return format(lastUpdateData.date);
};

const monitoringDays = registeredAt => {
  const now = moment();
  const registeredAtMom = moment(registeredAt);
  return now.diff(registeredAtMom, 'days');
};

const CaseNotification = params => {
  const caseNotification = Maybe.of(params).get({});

  return {
    ...caseNotification,
    registeredAt: format(caseNotification.registeredAt),
    updatedAt: updatedAt(caseNotification.history),
    monitoringDays: monitoringDays(caseNotification.registeredAt),
  };
};

export default CaseNotification;
