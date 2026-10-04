import Link from 'next/link'

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  )
}

export default NavLink
