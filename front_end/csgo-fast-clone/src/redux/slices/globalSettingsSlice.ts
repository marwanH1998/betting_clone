import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
export type LanguageEntry = {
  code: string;
  language: string;
};
// Define a type for the slice state
interface GlobalSettingState {
  languageObject: LanguageEntry,
  sound:boolean
}

// Define the initial state using that type
const initialState: GlobalSettingState = {
    languageObject: {language: "en",code:'US'},
    sound:true

}

export const globalSettingSlice = createSlice({
  name: 'global settings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageEntry>) => {
      state.languageObject.language = action.payload.language
      state.languageObject.code = action.payload.code

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleSound: state => {
      state.sound = ! state.sound
    }
  }
})

export const { changeLanguage,toggleSound } = globalSettingSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGlobalSettings = (state: RootState) => state.global

export default globalSettingSlice.reducer