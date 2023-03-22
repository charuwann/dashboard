import { CircularProgressbar } from "react-circular-progressbar";
import GradientSVG from "./gradientSVG";

export default function CircleProgressCustom({percentage, colorStart, colorStop, idCSS}) {
  return (
      <div>
        <GradientSVG colorStart={colorStart} colorStop={colorStop} idCSS={idCSS}/>
        <CircularProgressbar
          strokeWidth={12}
          value={percentage}
          styles={{
            path: { 
              strokeLinecap: 'round',              
              stroke: `url(#${idCSS})`, height: "90%" 
            },
            trail: {
              stroke: "#EEEEEE",
              strokeWidth: 6
            }
          }}
        />
      </div>
  );
}