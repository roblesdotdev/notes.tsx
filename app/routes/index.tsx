import type { MetaFunction } from '@remix-run/node'

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
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl font-bold">Notes.tsx</h1>
    </div>
  )
}
