import { LinksFunction } from '@remix-run/node'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwindStyles from '~/styles/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <header className="container mx-auto py-6">
          <nav className="flex justify-between">
            <Link to="/">
              <span className="font-bold">notes.tsx</span>
            </Link>
          </nav>
        </header>
        <div className="flex flex-1 items-stretch">{children}</div>

        <footer className="container mx-auto flex items-center justify-center py-8">
          <p>&copy; {new Date().getFullYear()} - @roblesdotdev</p>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
