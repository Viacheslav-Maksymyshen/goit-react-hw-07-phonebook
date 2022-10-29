import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, toAdd, toDelete } from 'api/ContactApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await toAdd(data);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const result = await toDelete(id);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
