import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Notes.tsx' },
    {
      name: 'description',
      content: 'Notes application created with remix.run',
    },
  ]
}

export default function Index() {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-xl font-bold">Notes.tsx</h1>
      <Link className="underline" to="/users/worm">
        Profile
      </Link>
    </div>
  )
}
