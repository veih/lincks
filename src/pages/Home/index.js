
import './home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Veih Programador</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
                <section className='link-aria'>
                    <a href='#'>
                        <p className='link-text'>Canal no youtube</p>
                    </a>
                </section>

                <section className='link-aria'>
                    <a href='#'>
                        <p className='link-text'>Grupo do telegram</p>
                    </a>
                </section>

                <section className='link-aria'>
                    <a href='#'>
                        <p className='link-text'>Instagram</p>
                    </a>
                </section>
            </main>
        </div>
    )
}

