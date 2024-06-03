import { Link, useParams } from '@remix-run/react'

export default function UserRoute() {
  const params = useParams()
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-xl font-bold">User {params.username}</h1>
      <Link className="underline" to="notes">
        Notes
      </Link>
    </div>
  )
}
