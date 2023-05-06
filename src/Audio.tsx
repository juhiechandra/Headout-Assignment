import { Audio } from 'remotion';
import myAudioFile from '../public/audio.mp3';

export const AudioFile: React.FC = () => {
  return (
    <div>
      {/* Add your video elements here */}
      <Audio src={myAudioFile} />
    </div>
  );
};
