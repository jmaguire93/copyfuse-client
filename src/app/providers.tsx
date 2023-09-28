import SessionContextProvider from '@/context/SessionContextProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionContextProvider>{children}</SessionContextProvider>
}

export default Providers
