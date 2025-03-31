import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { klient } from '../sanity-klient'

export default function MemberPage() {
  const { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    klient.fetch(`*[_type == "member" && _id == "${id}"][0]{
      name,
      email,
      image{asset->{url}},
      bio,
      interests,
      logs
    }`).then(data => setPerson(data))
  }, [id])

  if (!person) return <p>Laster...</p>

  return (
    <main>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      {person.image && <img src={person.image.asset.url} alt={person.name} style={{ width: "200px" }} />}
      <p><strong>Biografi:</strong> {person.bio}</p>

      <h2>Interesser</h2>
      <ul>
        {person.interests?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2>Loggføringer</h2>
      <ul>
        {person.logs?.map((log, i) => (
          <li key={i}>
            <strong>{log.date}</strong>: {log.text}
          </li>
        ))}
      </ul>
    </main>
  )
}
