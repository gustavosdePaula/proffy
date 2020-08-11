import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/16215193?s=460&u=54781cdd737df68d666345b071bceb7e9a2ea219&v=4" alt="Gus"/>
                <div>
                    <strong>Gustavao</strong>
                    <span>Tecnologia</span>
                </div>
            </header>
                <p>
                    Opa
                    <br/>
                    Opa
                </p>

                <footer>
                    <p>Preço/Hora
                        <strong>R$ 80,00</strong>
                    </p>
                    
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
    )
}

export default TeacherItem