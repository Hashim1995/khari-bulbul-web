import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from 'utils/axios';

export interface UserData {
data:{  id: string;
  website: string;
  email: string;
  facebook: string;
  instagram: string;
  coverPhoto: any;
}
}

interface SettingState {
  data: UserData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState: SettingState = {
  data: null,
  status: 'idle',
  error: null
};

// Async thunk for fetching user data
export const fetchContactData = createAsyncThunk(
  'setting/fetchContactData',
  async () => {
    try {
      const response = await api.get('/Setting');
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Create the user slice
const contactSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload; // Assign action.payload to state.data
    }
    // You can add more reducers here if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContactData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Assign action.payload to state.data
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error; // Use action.error to get the thrown error
      });

    // You can handle more actions here if needed
  }
});

// Export the reducer and actions
export const { setSetting } = contactSlice.actions;
export default contactSlice.reducer;
