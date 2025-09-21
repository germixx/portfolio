function Download() {
    return (
        <div>
            <a
                href={'/resume.pdf'}
                target="_blank"
                download
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                    Download Resume
            </a>
        </div>
    )
}

export default Download;
