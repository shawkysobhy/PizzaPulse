import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

/**
 * how start redux in app
 * you need three thing at beginig
 *  install redux in project
 * create a store
 * provide redux store to app
 * ----------------------
 * then create slices
 * to create slice you should name it and identify it , create state store values and updated , create reducers ot interact with valuse and updated it {3 three things}
 */
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAdress = createAsyncThunk(
  'user/fetchAdress',
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    return { position, address };
  },
);
const initialState = {
  userName: '',
  address: '',
  error: '',
  status: 'idle',
  position: {},
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAdress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAdress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'can not get your position check your browser or enter manually';
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
