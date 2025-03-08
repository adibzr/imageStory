export interface StoryData {
  id: string;
  image: string; // base64 string
  timestamp: number;
  viewed?: boolean;
}

const useStorageManager = () => {
  const STORAGE_KEY = "user_stories";
  const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const saveStory = (storyData: Omit<StoryData, "id">): StoryData => {
    const id = `story_${Date.now()}`;
    const newStory: StoryData = { ...storyData, id };

    const currentStories = getStories();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...currentStories, newStory])
    );

    return newStory;
  };

  const getStories = (): StoryData[] => {
    const storiesJson = localStorage.getItem(STORAGE_KEY);
    if (!storiesJson) return [];

    const stories: StoryData[] = JSON.parse(storiesJson);
    return stories.filter((story) => !isExpired(story));
  };

  const isExpired = (story: StoryData): boolean => {
    return Date.now() - story.timestamp > EXPIRATION_TIME;
  };

  const removeExpiredStories = (): void => {
    const currentStories = getStories();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentStories));
  };

  const markStoryAsViewed = (storyId: string): void => {
    const currentStories = getStories();
    const updatedStories = currentStories.map((story) =>
      story.id === storyId ? { ...story, viewed: true } : story
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStories));
  };

  return {
    saveStory,
    getStories,
    removeExpiredStories,
    markStoryAsViewed,
  };
};

export default useStorageManager;
