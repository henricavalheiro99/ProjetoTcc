import {useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; // Para visualização em lista
import rrulePlugin from '@fullcalendar/rrule';
import ptLocale from '@fullcalendar/core/locales/pt';

export default function CalendarioComponente() {
    const [turmas,setTurmas] = useState([])
    const [feriados,setFeriados] = useState([])
    const [feriadosf,setFeriadosf] = useState([])


    useEffect(() => {
        async function mostraTurmas(){
            let config = {
                methods: 'GET',
                headers: {
                    "Content-Type":"application/json"
                }
            }
            fetch("http://127.0.0.1:5000/turmascalendario", config)
                .then((dados)=> dados.json())
                .then(function (data) {
                    console.log(data.turmas)
                    setTurmas(data.turmas)
                })
                .catch((erro) =>alert(erro))
        }
        fetch(`https://brasilapi.com.br/api/feriados/v1/${2024}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let formated_data = []
                let data_bruta = []
                for (let i = 0; i < data.length; i++) {
                    formated_data.push({
                        'title': data[i].name,
                        'start': data[i].date,
                    })
                    data_bruta.push(data[i].date)
                }

                setFeriados(data_bruta)
                setFeriadosf(formated_data)
                console.log(data_bruta)
                console.log('Feriados:', formated_data);
                // Aqui você pode manipular os dados recebidos da API conforme necessário
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
        mostraTurmas()
    }, []);
console.log('turmas: ',turmas)

    const [currentView, setCurrentView] = useState('dayGridMonth');
    const [events, setEvents] = useState([]);

    function handleEventClick(info) {

        let titulo = info.event.title
        let html = ""

        if (info.event.end) {
            html += `<p><strong>Início:</strong> ${info.event.start?.toLocaleString()}</p>`
            html += `<p><strong>Fim:</strong> ${info.event.end?.toLocaleString()}</p>`

            // Descricao
            if (info.event.extendedProps.descricao) {
                html += `<p><strong>Descrição:</strong> ${info.event.extendedProps.descricao}</p>`
            }

            // Tags
            if (info.event.extendedProps.tags) {
                html += `<p><strong>Tags:</strong> ${info.event.extendedProps.tags.map(tag => tag.nome).join(", ")}</p>`
            }
        } else {
            html += `<p>Feriado.</p>`
            html += `<p><strong>Data:</strong> ${info.event.start?.toLocaleString()}</p>`
        }
    }
    return (
        <div style={{width: "95%"}}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, rrulePlugin]}
                initialView={currentView}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={[...feriadosf,...turmas,
                ]}
                locale={ptLocale}
                eventClick={handleEventClick}
            />
        </div>
    )
}