import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='Logo do Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='Logo do Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' target='_blank'>
                            <img src='/imagens/ig.png' target='_blank' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Imagem de fundo' />
            </section>
        </footer>
    )
}

export default Footer;