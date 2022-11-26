import { Links } from '../../components/Links'

import './home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Veih Programador</h1>
            <span>Veja meus links 👇</span>
            
            <main className='links'>
                <section className='link-aria'>
                    <Links canal='Youtube' />
                </section>

                <section className='link-aria'>
                    <Links canal='Instagram' />
                </section>

                <section className='link-aria'>
                    <Links canal='FaceBook' />
                </section>

            </main>

        </div>
    )
}

