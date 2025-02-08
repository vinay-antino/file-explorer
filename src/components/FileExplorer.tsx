import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addFolder,
  deleteFolder,
  updateFolderPosition,
  renameFolder,
  duplicateFolder,
  moveFolderIntoFolder,
} from "../redux/folderSlice";
import Folder from "./Folder";
import styled from "styled-components";
import { RootState } from "../redux/store";

const Canvas = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const ContextMenu = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
`;

const FileExplorer: React.FC = () => {
  const dispatch = useDispatch();
  const folders = useSelector((state: RootState) => state.folders.folders);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleAddFolder = () => {
    const newFolder = {
      id: String(Date.now()),
      name: "New Folder",
      position: { x: contextMenu?.x || 0, y: contextMenu?.y || 0 },
    };
    dispatch(addFolder(newFolder));
    setContextMenu(null);
  };

  const handleDeleteFolder = (id: string) => {
    dispatch(deleteFolder(id));
  };

  const handleDragFolder = (id: string, x: number, y: number) => {
    dispatch(updateFolderPosition({ id, x, y }));
  };

  const handleRenameFolder = (id: string, name: string) => {
    dispatch(renameFolder({ id, name }));
  };

  const handleDuplicateFolder = (id: string) => {
    dispatch(duplicateFolder(id));
  };

  const handleMoveIntoFolder = (folderId: string, parentId: string) => {
    dispatch(moveFolderIntoFolder({ folderId, parentId }));
  };

  const handleToggleOpen = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderFolders = (parentId?: string) => {
    return folders
      .filter((folder) => folder.parentId === parentId)
      .map((folder) => (
        <React.Fragment key={folder.id}>
          <Folder
            id={folder.id}
            name={folder.name}
            position={folder.position}
            onDrag={handleDragFolder}
            onRename={handleRenameFolder}
            onDuplicate={handleDuplicateFolder}
            onMoveIntoFolder={handleMoveIntoFolder}
            isOpen={openFolders[folder.id]}
            onToggleOpen={() => handleToggleOpen(folder.id)}
          />
          {openFolders[folder.id] && renderFolders(folder.id)}
        </React.Fragment>
      ));
  };

  return (
    <Canvas onContextMenu={handleRightClick}>
      {renderFolders()}
      {contextMenu && (
        <ContextMenu x={contextMenu.x} y={contextMenu.y}>
          <button onClick={handleAddFolder}>New Folder</button>
          {folders.length > 0 && (
            <button
              onClick={() => handleDeleteFolder(folders[folders.length - 1].id)}
            >
              Delete Folder
            </button>
          )}
        </ContextMenu>
      )}
    </Canvas>
  );
};

export default FileExplorer;
