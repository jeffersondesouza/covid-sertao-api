import { Maybe } from 'helpers/functors';
import UserRoles from 'enums/UserRolesEnum';

const EMPTY = {
  _id: {},
  city: { name: '' },
  uf: { name: '' },
  registeredAt: '',
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  role: '',
  expireAt: '',
};

const equals = (a, b) => a === b;

const isSuperUser = role => equals(role, UserRoles.SUPER_USER);
const isAdmin = role => equals(role, UserRoles.ADMIN);
const isMember = role => equals(role, UserRoles.MEMBER);
const isSimpleUser = role => equals(role, UserRoles.SIMPLE);

const CurrentUSer = params => {
  const user = Maybe.of(params).get({});
  const city = Maybe.of(user.city).get({});
  const uf = Maybe.of(user.uf).get({});

  return {
    id: user._id,
    city: city,
    uf: uf,
    role: user.role,
    isSuperUser: isSuperUser(user.role),
    isAdmin: isAdmin(user.role),
    isMember: isMember(user.role),
    isSimpleUser: isSimpleUser(user.role),
    registeredAt: user.registeredAt,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    expireAt: user.expireAt,
  };
};

export default CurrentUSer;
