import { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'

const useAuth = () => {
  return useContext(Authcontext)
}

export default useAuth
