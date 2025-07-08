const config = {
  plugins: [
    "@tailwindcss/postcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        stage: 3,
        autoprefixer: {
          flexbox: "no-2009",
        },
        features: {
          "custom-properties": false,
          "nesting-rules": true,
        },
      }
    ]],
};

export default config;
