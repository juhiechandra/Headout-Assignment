import { Composition } from "remotion";
import { Images } from "./Images";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Additional compositions can be rendered */}
	  <Composition
        component={Images} // Replace AbsoluteFill with MyComp component
        durationInFrames={600}
        width={1440}
        height={2960}
        fps={45}
        id="MyComp"
        defaultProps={{}}
      />
    </>
  );
};
