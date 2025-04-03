import { useEffect, useState } from "react"
import { klient } from "../sanity-klient"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function Home() {
  const [medlemmer, setMedlemmer] = useState([])

  useEffect(() => {
    klient.fetch(`*[_type == "member"]{_id, name, email, image{asset->{url}}}`)
      .then(data => setMedlemmer(data))
  }, [])

  return (
    <main>
      <Header />
      <h1>Gruppemedlemmer</h1>
      <section>
        {medlemmer.map((person) => (
          <article key={person._id}>
          <Link key={person._id} to={`/medlem/${person._id}`}
            style={{ textDecoration: "none", color: "inherit" }}>
              {person.image?.asset?.url && (
                <img
                  src={person.image.asset.url}
                  alt={`Bilde av ${person.name}`}
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              )}
              <h2>{person.name}</h2>
              <p>{person.email}</p>
          </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
