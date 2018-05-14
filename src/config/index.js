const url = (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000/v1'
    : 'http://localhost:3000/v1'

export default { API_URL: url }
