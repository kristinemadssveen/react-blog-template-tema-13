import React, {useState, useEffect} from 'react'
import './ProjectDetails.css'
import firebase from './firebase'
import parse from 'html-react-parser'
import  { Link } from '@reach/router'


const ProjectDetails = (props) => {

    const[project, setProject] = useState()

    let useEffectActivator = 1

    useEffect( () => {
        console.log('i am activated by the useEffectActivator constant')
    }, [useEffectActivator] )

    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .doc(props.id)
        .onSnapshot(
            snapshot => setProject(snapshot.data())
        )
    }, [props.id])

    return(

        <main className='project-details animated fadeInRight '>
            {
                project
                ?
            
        <div>
            
            <div className='container2'>

                <div className='bilde'>
                    {
                        project.defaultImage && 
                        <img src={project.defaultImage} alt='default' />
                    }
                </div>

                <div className='innhold'>
                    <h1 className='navn2'>{project.title}</h1>
                
                    <div className='year'>
                        {project.year}

                    </div>

                    <div className='description'>
                        {project.description && parse(project.description)}

                    </div>
                </div>

            </div>

                <p className='tilbake'>
                    <Link to={process.env.PUBLIC_URL + '/projects/'}>Tilbake</Link>
                </p>
            
            
    
        </div>
                :
                <h2>Henter prosjekt, vennligst vent</h2>  
            }
        </main>
    )
}

export default ProjectDetails