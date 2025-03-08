// Main wrapper component that manages the overall Stories feature
// Handles data fetching from local storage and state management

import { useEffect, useState } from "react";
import AddStoryButton from "./AddStoryButton";
import StoryAvatar from "./StoryAvatar";
import useStorageManager, { StoryData } from "../hooks/useStorageManager";

const StoriesContainer = () => {
  const { getStories } = useStorageManager();

  const [stories, setStories] = useState<StoryData[]>([]);
  useEffect(() => {
    const stories = getStories();
    console.log(stories);
    setStories(stories);
  }, []);

  return (
    <div>
      <AddStoryButton />
      {stories.map((story) => (
        <StoryAvatar
          key={story.id}
          story={story}
          onClick={(storyId) => {
            /* handle click */
            null;
          }}
        />
      ))}
    </div>
  );
};

export default StoriesContainer;
