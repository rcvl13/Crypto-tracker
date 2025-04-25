import { createSlice } from '@reduxjs/toolkit';
import initialData from './cryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: initialData,
  reducers: {
    updateCrypto: (state, action) => {
      const updates = action.payload;
      updates.forEach((update) => {
        const crypto = state.find((c) => c.id === update.id);
        if (crypto) {
          Object.assign(crypto, update);
        }
      });
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
