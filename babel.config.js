module.exports = function(api) {
  api.cache(true);
  return {
    presets: [["module:metro-react-native-babel-preset"], ['react-app']],
    ignore: [ "node_modules/art/core/color.js" ],
    plugins: [
      ["module-resolver", {
        "alias": {
          "^react-native$": "react-native-web"
        }
      },
     
    ],
     '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ],
    
  };
};
