import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

    return (
        <div className="w-full lg:w-3/5 mx-10">
            {
                (pacientes && pacientes.length)
                    ? <>
                        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">Aministra tus {''}
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>

                        <div className='md:h-screen overflow-y-scroll'>
                            {
                                pacientes.map((paciente) => (
                                    <Paciente
                                        key={paciente.id}
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                        eliminarPaciente={eliminarPaciente} />
                                ))
                            }
                        </div>
                    </>
                    : <>
                        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">Comienza agregando tus pacientes {''}
                            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                        </p>
                    </>
            }
        </div>
    )

}

export default ListadoPacientes