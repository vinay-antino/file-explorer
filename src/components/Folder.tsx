import React, { useState } from "react";
import styled from "styled-components";

interface FolderProps {
  id: string;
  name: string;
  position: { x: number; y: number };
  onDrag: (id: string, x: number, y: number) => void;
  onRename: (id: string, name: string) => void;
  onDuplicate: (id: string) => void;
  onMoveIntoFolder: (folderId: string, parentId: string) => void;
  isOpen?: boolean;
  onToggleOpen?: () => void;
}

const FolderWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: move;
  background-color: #f9f9f9;
`;

const Folder: React.FC<FolderProps> = ({
  id,
  name,
  position,
  onDrag,
  onRename,
  onDuplicate,
  onMoveIntoFolder,
  isOpen,
  onToggleOpen,
}) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    onDrag(id, e.clientX, e.clientY);
  };

  const handleRename = () => {
    onRename(id, newName);
    setIsRenaming(false);
  };

  return (
    <FolderWrapper
      x={position.x}
      y={position.y}
      draggable
      onDragEnd={handleDrag}
    >
      {isRenaming ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleRename}
          autoFocus
        />
      ) : (
        <div onDoubleClick={() => setIsRenaming(true)}>{name}</div>
      )}
      <button onClick={() => onDuplicate(id)}>Duplicate</button>
      {onToggleOpen && (
        <button onClick={onToggleOpen}>{isOpen ? "Close" : "Open"}</button>
      )}
    </FolderWrapper>
  );
};

export default Folder;
