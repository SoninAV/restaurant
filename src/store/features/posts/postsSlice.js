import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
    'posts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        filteredPosts: []
    },
    reducers: {
        filterPosts: (state,action) => {
            state.filteredPosts = state.posts.filter(post => {
                return post.title.toLowerCase().includes(action.payload.toLowerCase())}
            )
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.filteredPosts = action.payload
        })
    }
})

export const { filterPosts } = postsSlice.actions

export default postsSlice.reducer