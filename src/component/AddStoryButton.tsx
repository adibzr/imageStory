// Special StoryAvatar with plus icon
// Triggers file upload dialog when clicked

import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import styles from "../styles/AddStoryButton.module.css";
import useStorageManager from "../hooks/useStorageManager";
import useImageProcessor from "../hooks/useImageProcessor";

interface AddStoryButtonProps {
  onStoryAdded?: () => void;
}

const AddStoryButton = ({ onStoryAdded }: AddStoryButtonProps) => {
  const { processImage } = useImageProcessor();
  const { saveStory } = useStorageManager();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      processImage(file).then((image) => {
        saveStory({ image, timestamp: Date.now() });
        if (onStoryAdded) {
          onStoryAdded();
        }
      });
    }
  };

  return (
    <div className={styles.addStoryContainer}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button
        className={styles.addStoryButton}
        onClick={() => fileInputRef.current?.click()}
      >
        <CiCirclePlus />
      </button>
    </div>
  );
};

export default AddStoryButton;
