import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const Authcontext = createContext<Session | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useSession()
  const [user, setUser] = useState<Session | null>(null)
  const [toasted, setToasted] = useState(false)
  useEffect(() => {
    if (data) {
      setUser(data)
      !toasted && toast.success(`Welcome back ${data.user?.name}!`)
      setToasted(true)
    }
  }, [data])
  return <Authcontext.Provider value={user}>{children}</Authcontext.Provider>
}

export default AuthProvider
