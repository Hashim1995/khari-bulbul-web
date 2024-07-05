import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from 'utils/axios';

export interface UserData {
data:{  
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
export const fetchLogoData = createAsyncThunk(
  'setting/fetchLogoData',
  async () => {
    try {
      const response = await api.get('/Logo');
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

// Create the user slice
const logoSlice = createSlice({
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
      .addCase(fetchLogoData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLogoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Assign action.payload to state.data
      })
      .addCase(fetchLogoData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error; // Use action.error to get the thrown error
      });

    // You can handle more actions here if needed
  }
});

// Export the reducer and actions
export const { setSetting } = logoSlice.actions;
export default logoSlice.reducer;
