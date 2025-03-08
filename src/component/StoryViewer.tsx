// Full-screen overlay for viewing stories
// Handles navigation between stories

import { StoryData } from "../hooks/useStorageManager";

interface StoryViewerProps {
  stories: StoryData[];
  initialStoryId?: string;
  onClose: () => void;
}

const StoryViewer = ({
  stories,
  initialStoryId,
  onClose,
}: StoryViewerProps) => {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <div>Initial Story ID: {initialStoryId}</div>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default StoryViewer;
