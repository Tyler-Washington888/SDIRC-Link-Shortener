import api from './apiConfig'

// /api/links

export const getLinks = async () => {
    try {
      const response = await api.get('/api/links/')
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
        const response = await api.post('/api/links/', post)
        return response.data
    } catch (error) {
        throw error
    }
}

