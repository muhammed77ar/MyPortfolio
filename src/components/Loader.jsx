import { Html, useProgress } from "@react-three/drei";
import {logo} from "../assets"

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-violet-600"></div>
    <img src={logo}  className="rounded-full h-32 w-32 " />
</div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;