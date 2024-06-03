import { useParams } from '@remix-run/react'

export default function NoteRoute() {
  const params = useParams()
  const noteId = params.noteId
  return (
    <div>
      <h1 className="text-xl font-bold">Note {noteId}</h1>
    </div>
  )
}
