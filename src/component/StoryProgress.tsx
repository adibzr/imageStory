// Progress bar(s) at the top of the StoryViewer
// Shows viewing progress and story segments

interface StoryProgressProps {
  duration: number;
  onComplete: () => void;
  isActive: boolean;
}

const StoryProgress = ({
  duration,
  onComplete,
  isActive,
}: StoryProgressProps) => {
  return (
    <div>
      <p>Duration: {duration}</p>
      <p>Is Active: {isActive ? "Yes" : "No"}</p>
      <button onClick={onComplete}>Complete</button>
    </div>
  );
};

export default StoryProgress;
