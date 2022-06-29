function Error({ children }) {
    return (
        <div className="bg-red-600 text-white text-center font-bold py-2 mb-5 text-sm">
            <p>{children}</p>
        </div>
    )
}

export default Error