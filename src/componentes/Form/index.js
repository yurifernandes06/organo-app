import React, { useState } from 'react';
import Button from '../Button';
import DropdowList from '../DropdowList.css';
import TextField from '../TextField';
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")


    const whenSaving = (event) => {
        event.preventDefault();
        props.toTheRegisteredCollaborator({
            name,
            position,
            image,
            team
        })
        setName("")
        setPosition("")
        setImage("")
        setTeam("")
    }

    return (
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanging={value => setName(value)} />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    whenChanging={value => setPosition(value)} />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    whenChanging={value => setImage(value)} />
                <DropdowList
                    mandatory={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    whenChanging={value => setTeam(value)} />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;