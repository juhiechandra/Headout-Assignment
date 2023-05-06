import { useCurrentFrame, AbsoluteFill } from "remotion";
import { Images } from "./Images";

import { AudioFile } from "./Audio";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <Images/>
	  <AudioFile/>
    </AbsoluteFill>
  );
};
