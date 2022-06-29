function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { id, nombre, propietario, email, alta, sintomas } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold capitalize rounded-md"
                    onClick={() => setPaciente(paciente)}
                    type="button">Editar</button>

                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 transition-all text-white font-bold capitalize rounded-md"
                    onClick={handleEliminar}
                    type="button">Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente