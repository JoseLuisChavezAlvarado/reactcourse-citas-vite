import { useEffect, useState } from "react"
import Error from "./Error"

function Formulario({ paciente, pacientes, setPacientes }) {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay almenos un campo vacío')
            setError(true)
            return
        }

        const objetoPaciente = { nombre, propietario, email, alta, sintomas }

        if (paciente.id) {
            //EDITAR REGISTRO
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
        } else {
            //NUEVO REGISTRO
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        clearForm()
        setError(false)
    }

    const clearForm = () => {
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="w-full md:w-1/2 lg:w-2/5 md:h-screen">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md py-10 px-5 mb-10">

                {
                    error && <Error>Todos los campos son obligatorios</Error>
                }

                <div>
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="nombre"
                        type='text'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md mb-5" />
                </div>

                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input
                        id="propietario"
                        type='text'
                        placeholder="Nombre del propietario"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                        className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md mb-5" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type='email'
                        placeholder="Email de contacto"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md mb-5" />
                </div>

                <div>
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        id="alta"
                        type='date'
                        value={alta}
                        onChange={e => setAlta(e.target.value)}
                        className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md mb-5" />
                </div>

                <div>
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea
                        id="sintomas"
                        type='date'
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md mb-5" />
                </div>

                <input
                    type='submit'
                    value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" />

            </form>
        </div>
    )
}

export default Formulario