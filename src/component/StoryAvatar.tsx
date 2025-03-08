// Circular component for each story in the StoriesBar
// Shows user/story thumbnail
// Indicates viewed/unviewed status with different border colors

import { StoryData } from "../hooks/useStorageManager";

interface StoryAvatarProps {
  story: StoryData;
  onClick: (storyId: string) => void;
}

const StoryAvatar = ({ story, onClick }: StoryAvatarProps) => {
  return <div onClick={() => onClick(story.id)}>img</div>;
};

export default StoryAvatar;
