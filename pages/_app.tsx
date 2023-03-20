import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import AuthProvider from '../contexts/Authcontext'
import { Toaster } from 'react-hot-toast'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
export interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
  session?: any
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    session,
    pageProps
  } = props

  const getLayout = Component.getLayout || ((page) => page)
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <ThemeProvider theme={theme}>
            <Toaster />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </AuthProvider>
    </SessionProvider>
  )
}
