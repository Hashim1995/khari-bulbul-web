import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LayoutLanguage } from 'models/common';
import api from 'utils/axios';

// Define the async thunk to fetch website title based on language
export const fetchWebsiteTitle = createAsyncThunk(
  'core/fetchWebsiteTitle',
  async (language: LayoutLanguage) => {
    const response = await api.get(`/websiteTitle`);
    return response.data;
  }
);

// Define a selector function to retrieve websiteTitle
export const selectWebsiteTitle = (state: any) => state.core.websiteTitle;

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    currentLayoutLanguage: LayoutLanguage.Azerbaijani,
    websiteTitle: {
      caruselGalleryHeader: null,
      caruselGalleryContent: null,
      aboutUsHeader: null,
      aboutUsContent: null,
      booksHeader: null,
      booksContent: null,
      founderHeader: null,
      founderContent: null,
      founderSpeciality: null,
      articleHeader: null,
      articleContent: null,
      photoGalleryHeader: null,
      photoGalleryContent: null,
      newsLetterHeader: null,
      newsLetterContent: null,
      bioContent: null,
    }
  },
  reducers: {
    setCurrentLayoutLanguage: (state, action) => {
      state.currentLayoutLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWebsiteTitle.fulfilled, (state, action) => {
      state.websiteTitle = action.payload;
    });
  },
});

export const { setCurrentLayoutLanguage } = coreSlice.actions;
export default coreSlice.reducer;
