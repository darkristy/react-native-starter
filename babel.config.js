module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          components: "./src/components",
          contexts: "./src/contexts",
          screens: "./src/screens",
          stores: "./src/stores",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
