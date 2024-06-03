import { Link, Outlet, useParams } from '@remix-run/react'

export default function UserNotesRoute() {
  const params = useParams()
  const username = params.username
  return (
    <div className="container mx-auto flex">
      <div className="flex w-1/6 flex-col">
        <Link to={`/users/${username}/notes`}>
          <h1 className="text-xl font-bold">Notes</h1>
        </Link>
        <ul className="mt-4 flex flex-col gap-y-2">
          <li>
            <Link to="note-1">Note 1</Link>
          </li>
          <li>
            <Link to="note-2">Note 2</Link>
          </li>
        </ul>
      </div>
      <div className="flex w-full px-4">
        <Outlet />
      </div>
    </div>
  )
}
