import { getCurrentUser } from '../services/authen.service'
import { userRoles } from '../constants/constant'

export const isRoleSa = () => {
  const user = getCurrentUser()
  const validSa = user?.role === userRoles.SUPPER_ADMIN
  return validSa
}
