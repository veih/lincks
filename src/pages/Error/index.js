import { Link } from 'react-router-dom'

import './Error.css'

export default function Error() {
    return (
        <div className='error'>
          <h1>Página não encontrada:</h1>

          <Link className='link' to='/'>
            Volta para página Home
          </Link>
        </div>
    )
}