import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contact-slice';
import logoSlice from './logo-slice'; 
import { LayoutLanguage } from '../models/common';
import coreReducer from './core/core-slice';

const savedLayoutLanguage = localStorage.getItem('currentLayoutLanguage');
const initialLayoutLanguage = savedLayoutLanguage
  ? (savedLayoutLanguage as LayoutLanguage)
  : LayoutLanguage.Azerbaijani;

const preloadedState = {
  core: {
    currentLayoutLanguage: initialLayoutLanguage,
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
  }
  // Add other initial states if necessary
};

export const store = configureStore({
  reducer: {
    setting: contactSlice,
    logo: logoSlice, 
    core: coreReducer
  },
  preloadedState
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
store.subscribe(() => {
  // Get the current state
  const state = store.getState();
  // Save the current layout language to localStorage
  localStorage.setItem(
    'currentLayoutLanguage',
    state.core.currentLayoutLanguage
  );
});

