import styles from './assets/snowfall.module.css';

export const Snowfall = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    cx: Math.random() * 1600,
    cy: -100,
    r: Math.random() * 3 + 1,
    delay: Math.random() * 5000,
  }));

  return (
    <svg
      viewBox='0 0 1200 800'
      preserveAspectRatio='none'
      width='100%'
      height='100%'
      className='absolute pointer-events-none'
    >
      {snowflakes.map((snowflake, i) => (
        <g key={i}>
          <circle
            className={styles.snowflake}
            cx={snowflake.cx}
            cy={snowflake.cy}
            r={snowflake.r}
            style={{
              animationDelay: `${snowflake.delay}ms`,
            }}
          />
        </g>
      ))}
    </svg>
  );
};
