import { useEffect, useState } from "react"
import { klient } from "../sanity-klient"

//Dette er en test for å se om det er koblet til react..,.
export default function Home() {
    const [medlemmer, setMedlemmer] = useState([])
  
    useEffect(() => {
      klient.fetch(`*[_type == "member"]{_id, name, email, image{asset->{url}}}`)
        .then(data => {
          console.log("Sanity-data:", data)
          setMedlemmer(data)
        })
    }, [])
  
    return (
      <main>
        <h1>Gruppemedlemmer</h1>
        <section>
          {medlemmer.map((person) => (
            <article key={person._id}>
              <h2>{person.name}</h2>
              <p>{person.email}</p>
              {person.image && person.image.asset && (
                <img
                  src={person.image.asset.url}
                  alt={`Bilde av ${person.name}`}
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              )}
            </article>
          ))}
        </section>
      </main>
    )
  }