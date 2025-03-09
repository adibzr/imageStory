// Full-screen overlay for viewing stories
// Handles navigation between stories

import { StoryData } from "../hooks/useStorageManager";
import styles from "../styles/StoryViewer.module.css";

const StoryViewer = ({ story }: { story: StoryData }) => {
  return (
    <div className={styles.storyViewer}>
      <div>Initial Story ID: {story.id}</div>
      <img src={story.image} alt={`Image: ${story.id}`} />
    </div>
  );
};

export default StoryViewer;
