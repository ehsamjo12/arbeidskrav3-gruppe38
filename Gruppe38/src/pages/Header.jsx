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
    <header>
      <h1 href="/">Gruppe 38</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="member/"></Link>
          </li>
          <li>
            <Link to="member/"></Link>
          </li>
          <li>
            <Link to="member/"></Link>
          </li>
          <li>
            <Link to="member/"></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
