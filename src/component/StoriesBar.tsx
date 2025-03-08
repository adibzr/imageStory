// Horizontal scrollable container for story avatars
// Displays all available stories and the add button

import { StoryData } from "../hooks/useStorageManager";

interface StoriesBarProps {
  stories: StoryData[];
  onStoryClick: (storyId: string) => void;
  onAddStoryClick: () => void;
}

const StoriesBar = ({
  stories,
  onStoryClick,
  onAddStoryClick,
}: StoriesBarProps) => {
  return (
    <div className="stories-bar">
      {stories.map((story) => (
        <div key={story.id} onClick={() => onStoryClick(story.id)}>
          img
        </div>
      ))}
      <button onClick={onAddStoryClick}>Add Story</button>
    </div>
  );
};

export default StoriesBar;
