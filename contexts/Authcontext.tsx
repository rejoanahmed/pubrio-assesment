import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const Authcontext = createContext<Session | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useSession()
  const [user, setUser] = useState<Session | null>(null)
  useEffect(() => {
    setUser(data)
  }, [data])
  return <Authcontext.Provider value={user}>{children}</Authcontext.Provider>
}

export default AuthProvider
