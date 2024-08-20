import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Team from './componentes/Team';
import Footer from './componentes/Footer';
import './global.css';

function App() {

    const teams = [
        {
          name: "Programação",
          primaryColor: "var(--programming-primary-color)", 
          secondaryColor: "var(--programming-secondary-color)" 
        },
        {
          name: "Front-End",
          primaryColor: "var(--frontend-primary-color)", 
          secondaryColor: "var(--frontend-secondary-color)" 
        },
        {
          name: "Data Science",
          primaryColor: "var(--data-science-primary-color)", 
          secondaryColor: "var(--data-science-secondary-color)" 
        },
        {
          name: "Devops",
          primaryColor: "var(--devops-primary-color)", 
          secondaryColor: "var(--devops-secondary-color)" 
        },
        {
          name: "UX e Design",
          primaryColor: "var(--ux-primary-color)", 
          secondaryColor: "var(--ux-secondary-color)" 
        },
        {
          name: "Mobile",
          primaryColor: "var(--mobile-primary-color)", 
          secondaryColor: "var(--mobile-secondary-color)" 
        },
        {
          name: "Inovação e Gestão",
          primaryColor: "var(--innovation-primary-color)", 
          secondaryColor: "var(--innovation-secondary-color)" 
        }
      ];

    const [collaborators, setCollaborators] = useState([])

    const toTheNewRegisteredEmployee = (collaborator) => {
        setCollaborators([...collaborators, collaborator])
    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(team => team.name)} toTheRegisteredCollaborator={collaborator => toTheNewRegisteredEmployee(collaborator)} />
            {teams.map(team => <Team
                key={team.name}
                name={team.name}
                primaryColor={team.primaryColor}
                secondaryColor={team.secondaryColor}
                collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}/>)}
            <Footer />
        </div>
    );
}

export default App;
