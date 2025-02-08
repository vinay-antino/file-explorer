import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Folder {
  id: string;
  name: string;
  position: { x: number; y: number };
  parentId?: string; // To support nesting
}

interface FoldersState {
  folders: Folder[];
}

const initialState: FoldersState = {
  folders: [],
};

const foldersSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder: (state, action: PayloadAction<Folder>) => {
      state.folders.push(action.payload);
    },
    deleteFolder: (state, action: PayloadAction<string>) => {
      state.folders = state.folders.filter(
        (folder) => folder.id !== action.payload
      );
    },
    updateFolderPosition: (
      state,
      action: PayloadAction<{ id: string; x: number; y: number }>
    ) => {
      const folder = state.folders.find((f) => f.id === action.payload.id);
      if (folder) {
        folder.position = { x: action.payload.x, y: action.payload.y };
      }
    },
    renameFolder: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const folder = state.folders.find((f) => f.id === action.payload.id);
      if (folder) {
        folder.name = action.payload.name;
      }
    },
    duplicateFolder: (state, action: PayloadAction<string>) => {
      const folder = state.folders.find((f) => f.id === action.payload);
      if (folder) {
        const newFolder = {
          ...folder,
          id: String(Date.now()),
          position: { x: folder.position.x + 20, y: folder.position.y + 20 },
        };
        state.folders.push(newFolder);
      }
    },
    moveFolderIntoFolder: (
      state,
      action: PayloadAction<{ folderId: string; parentId: string }>
    ) => {
      const folder = state.folders.find(
        (f) => f.id === action.payload.folderId
      );
      if (folder) {
        folder.parentId = action.payload.parentId;
      }
    },
  },
});

export const {
  addFolder,
  deleteFolder,
  updateFolderPosition,
  renameFolder,
  duplicateFolder,
  moveFolderIntoFolder,
} = foldersSlice.actions;
export default foldersSlice.reducer;
