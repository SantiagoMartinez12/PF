

const serverFinder = (path) => {
    const baseUrl = process.env.NODE_ENV === 'production' ?
        `/api/${path}` : `http://localhost:3001/api/${path}`
        return baseUrl;
}

export default serverFinder;