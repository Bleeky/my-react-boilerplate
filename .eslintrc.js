module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      webpack: {
        config: "./config/webpack.config.babel.js",
      },
      "babel-module": {},
    },
  },
  rules: {
    "no-plusplus": 0,
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
