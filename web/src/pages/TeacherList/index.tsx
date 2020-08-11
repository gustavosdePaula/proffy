import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <div id="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div id="input-block">
                        <label htmlFor="subject">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div id="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;