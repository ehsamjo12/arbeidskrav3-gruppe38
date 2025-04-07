import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { klient } from "../sanity-klient"

export default function Header() {
  const [medlemmer, setMedlemmer] = useState([])

  useEffect(() => {
    klient.fetch(`*[_type == "member"]{_id, name}`)
      .then(data => setMedlemmer(data))
  }, [])

  return (
    <header className="header">
      <h1 className="header">Gruppe 38</h1>
      <nav className="header">
        <Link to="/">Hjem</Link>
        {medlemmer.map((m) => (
          <Link key={m._id} to={`/medlem/${m._id}`}>
            {m.name.split(" ")[0]}
          </Link>
        ))}
      </nav>
    </header>
  )
}
