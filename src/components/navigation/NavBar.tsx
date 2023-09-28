import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className='fixed w-full p-3 z-10 bg-blue-500'>
      <ul className='flex space-x-4 text-white text-sm'>
        <li>
          <Link href='/'>Copyfuse</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
