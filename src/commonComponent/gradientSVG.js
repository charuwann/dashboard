function GradientSVG({colorStart, colorStop, idCSS}) {
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor={colorStart} />
          <stop offset="85.56%" stopColor={colorStop} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;
