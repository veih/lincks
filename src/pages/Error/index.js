import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

import './Error.css'

export default function Error() {
    return (
        <div className='error'>
          <Logo />
          <h1>Página não encontrada:</h1>

          <Link className='link' to='/'>
            Volta para página Home
          </Link>
        </div>
    )
}