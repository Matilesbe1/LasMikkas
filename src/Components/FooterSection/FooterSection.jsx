import React from 'react'
import './FooterSection.css'

const FooterSection = () => {
    return (
        <div className='footer-container'>
            <div className='footer-container-top'>
                <span>Envio gratis en CABA</span>
                <span>Atencion por Instagram MD</span>
            </div>
            <div className='footer-container-mid'>
                <div className='pay'>
                    <h5>medios de pago</h5>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png" alt="VISA debito" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="Tarjeta Naranja" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="Mastercard" />
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="VISA" />
                    <img src="https://getlogovector.com/wp-content/uploads/2023/12/mercado-pago-logo-vector-2023.png" alt="Mercado Pago" />
                </div>
                <div className='social-media-buttons'>
                    <button><i className="bi bi-instagram"><a href="https://www.tiktok.com/@lasmikkas?lang=es-419"></a></i></button>
                    <button><i className="bi bi-tiktok"><a href=""></a></i></button>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
