# File Explorer - React + Redux + TypeScript

A fully functional file explorer interface built with React, Redux, TypeScript, and Styled Components. This project demonstrates how to create a dynamic and interactive file explorer with features like folder creation, deletion, renaming, duplication, and nesting.

---

## Features

1. **Folder Management**:
   - Create new folders with a right-click context menu.
   - Delete existing folders.
   - Rename folders by double-clicking on them.
   - Duplicate folders with a single click.

2. **Drag-and-Drop**:
   - Drag folders to reposition them on the canvas.
   - Drag folders into other folders to nest them.

3. **Nested Folders**:
   - Move folders inside other folders.
   - Explore nested folders by toggling their visibility.

4. **Context Menu**:
   - Right-click anywhere on the canvas to open a context menu with options to create or delete folders.

5. **Type Safety**:
   - Built with TypeScript to ensure type safety and avoid the use of `any`.

6. **Styling**:
   - Uses Styled Components for clean and modular CSS.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing global application state.
- **TypeScript**: A typed superset of JavaScript for better developer experience.
- **Styled Components**: A library for styling React components with CSS-in-JS.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/file-explorer.git
   cd file-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
file-explorer/
├── src/
│   ├── components/
│   │   ├── Folder.tsx          # Folder component with drag-and-drop and renaming
│   │   └── FileExplorer.tsx    # Main file explorer component
│   ├── redux/
│   │   └── foldersSlice.ts, store.ts     # Redux slice for folder state management               # Redux store configuration
│   ├── App.tsx                 # Main application component
│   └── index.tsx               # Entry point for the app
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## How It Works

### Redux State Management
- The `foldersSlice.ts` file defines the Redux slice for managing folder state.
- Actions like `addFolder`, `deleteFolder`, `renameFolder`, `duplicateFolder`, and `moveFolderIntoFolder` are used to update the state.

### Folder Component
- The `Folder.tsx` component renders a single folder and handles drag-and-drop, renaming, and duplication.

### File Explorer Component
- The `FileExplorer.tsx` component renders the canvas and handles the context menu, folder creation, and nesting logic.

### Styling
- Styled Components are used to style the canvas, folders, and context menu.

---

## Usage

1. **Create a Folder**:
   - Right-click anywhere on the canvas and select "New Folder" from the context menu.

2. **Rename a Folder**:
   - Double-click on a folder to enter renaming mode. Type the new name and press Enter or click outside the input.

3. **Duplicate a Folder**:
   - Click the "Duplicate" button on a folder to create a copy.

4. **Delete a Folder**:
   - Right-click on the canvas and select "Delete Folder" from the context menu.

5. **Nest Folders**:
   - Drag a folder into another folder to nest it.

6. **Explore Nested Folders**:
   - Click the "Open/Close" button on a folder to toggle its visibility.

---

## Future Enhancements

- Add support for files (e.g., text files, images).
- Implement a breadcrumb navigation system for nested folders.
- Add animations for folder creation, deletion, and nesting.
- Save and load folder structure using local storage or an API.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React](https://reactjs.org/) for the UI library.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- [TypeScript](https://www.typescriptlang.org/) for type safety.
- [Styled Components](https://styled-components.com/) for styling.

---

Enjoy exploring the file explorer! 🚀
