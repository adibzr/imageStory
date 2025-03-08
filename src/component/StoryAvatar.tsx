// Circular component for each story in the StoriesBar
// Shows user/story thumbnail
// Indicates viewed/unviewed status with different border colors

import { StoryData } from "../hooks/useStorageManager";

interface StoryAvatarProps {
  story: StoryData;
  onClick: (storyId: string) => void;
}

const StoryAvatar = ({ story, onClick }: StoryAvatarProps) => {
  return (
    <div onClick={() => null}>
      <img src={story.image} alt="" />
    </div>
  );
};

export default StoryAvatar;
