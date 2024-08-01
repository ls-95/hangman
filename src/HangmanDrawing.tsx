import "./App.css";

const HEAD = <div className="Head" />;
const BODY = <div className="Body" />;
const RIGHT_ARM = <div className="RightArm" />;
const LEFT_ARM = <div className="LeftArm" />;
const RIGHT_LEG = <div className="RightLeg" />;
const LEFT_LEG = <div className="LeftLeg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="HangmanDrawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="SmallVerticalLine" />
      <div className="TopLine" />
      <div className="VerticalLine" />
      <div className="BottomLine" />
    </div>
  );
}
