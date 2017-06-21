import Index from '@/components/Users/Index'
import New from '@/components/Users/New'
import Registration from '@/components/Users/Registration'
import LogIn from '@/components/Users/LogIn'
import Update from '@/components/Users/Update'

export default [
  {
    path: '/users',
    name: 'UsersIndex',
    component: Index
  },
  {
    path: '/users/new',
    name: 'NewUser',
    component: New
  },
  {
    path: '/users/registration',
    name: 'RegistrationUser',
    component: Registration
  },
  {
    path: '/users/update',
    name: 'UpdateUser',
    component: Update
  },
  {
    path: '/users/login',
    name: 'LogInUser',
    component: LogIn
  }
]
