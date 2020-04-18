import { Maybe } from 'helpers/functors';
import UserRoles from 'enums/UserRolesEnum';

const role = role => {
  const RolesNames = {
    0: 'Super Usuário',
    1: 'Administrador',
    2: 'Membro',
    DEFAULT: 'Usuário',
  };

  return RolesNames[role] || RolesNames.DEFAULT;
};

const phone = phoneNumber => {
  console.log('phoneNumber:', phoneNumber);
  const cod = phoneNumber.slice(0, 2);
  const phone = phoneNumber.slice(2);

  if (phone.length === 9) {
    const phone1 = phone.slice(0, 1);
    const phone2 = phone.slice(1, 5);
    const phone3 = phone.slice(5);

    return `(${cod}) ${phone1} ${phone2}-${phone3}`;
  } else {
    const phone1 = phone.slice(0, 4);
    const phone2 = phone.slice(4);

    return `(${cod}) ${phone1}-${phone2}`;
  }
};

const CurrentUSer = params => {
  const user = Maybe.of(params).get({});
  const city = Maybe.of(user.city).get({});
  const uf = Maybe.of(user.uf).get({});

  return {
    id: user._id,
    name: `${user.firstname} ${user.lastname}`,
    phone: phone(user.phone),
    lotation: user.lotation,
    job: user.job,
    role: role(user.role),
  };
};

export default CurrentUSer;
