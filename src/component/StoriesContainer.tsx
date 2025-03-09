// Main wrapper component that manages the overall Stories feature
// Handles data fetching from local storage and state management

import { useCallback, useEffect, useState } from "react";
import AddStoryButton from "./AddStoryButton";
import StoryAvatar from "./StoryAvatar";
import useStorageManager, { StoryData } from "../hooks/useStorageManager";
import style from "../styles/StoriesContainer.module.css";
import StoryViewer from "./StoryViewer";

const StoriesContainer = () => {
  const storageManager = useStorageManager();
  const [stories, setStories] = useState<StoryData[]>([]);
  const [displayStory, setDisplayStory] = useState<StoryData | null>(null);

  const updateStories = useCallback(() => {
    const currentStories = storageManager.getStories();
    setStories(currentStories);
  }, []);

  useEffect(() => {
    updateStories();
  }, [updateStories]);

  const handleStoryAdded = useCallback(() => {
    updateStories();
  }, [updateStories]);

  const handleAvatarClick = (storyId: string) => {
    const story = stories.find((s) => s.id === storyId);
    if (story) {
      setDisplayStory(story);
    }
  };

  return (
    <div>
      <div className={style.storyAvatarContainer}>
        <AddStoryButton onStoryAdded={handleStoryAdded} />
        {stories.map((story) => (
          <StoryAvatar
            key={story.id}
            story={story}
            onClick={handleAvatarClick}
          />
        ))}
      </div>
      <div className={style.storyDisplayContainer}>
        {displayStory && <StoryViewer story={displayStory} />}
      </div>
    </div>
  );
};

export default StoriesContainer;
