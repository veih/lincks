import { Links } from '../../components/Links'

import './home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Veih Programador</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
                <section className='link-aria'>
                  <a href='https://www.linkedin.com/in/marcelo-evangelista-847515175/' target="_blank" rel="noreferrer"><Links social='Linkedin'/></a> 
                </section>

                <section className='link-aria'>
                   <a href='https://www.instagram.com/accounts/activity/' target="_blank" rel="noreferrer"><Links social='Instagram'/></a>
                </section>

                <section className='link-aria'>
                  <a href='https://www.facebook.com/veihbabal' target="_blank" rel="noreferrer"><Links social='FaceBook' /></a>
                </section>

            </main>

        </div>
    )
}

