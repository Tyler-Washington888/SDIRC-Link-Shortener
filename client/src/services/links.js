import api from './apiConfig'

export const getLinks = async () => {
    try {
      const response = await api.get('/api/links/')
      return response.data
    } catch (error) {
      throw error
    }
}

export const getMyLinks = async (email) => {
    try {
      const response = await api.get('/api/links/myLinks', email)
      return response.data
    } catch (error) {
      throw error
    }
}

export const createPost = async (post) => {
    try {
        const response = await api.post('/api/links/', post)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updatePost = async (id, post) => {
    try {
        const response = await api.put(`/api/links/${id}`, post)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/api/links/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}
