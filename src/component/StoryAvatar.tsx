// Circular component for each story in the StoriesBar
// Shows user/story thumbnail
// Indicates viewed/unviewed status with different border colors

import { StoryData } from "../hooks/useStorageManager";
import style from "../styles/StoryAvatar.module.css";

interface StoryAvatarProps {
  story: StoryData;
  onClick: (storyId: string) => void;
}

const StoryAvatar = ({ story, onClick }: StoryAvatarProps) => {

  const handleAvatarClick = () => {
    onClick(story.id);
  }

  return (
    <div onClick={handleAvatarClick} className={style.storyAvatarContainer}>
      <img src={story.image} alt="" />
    </div>
  );
};

export default StoryAvatar;
