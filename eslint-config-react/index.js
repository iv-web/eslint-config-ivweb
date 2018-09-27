module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "16.2.0", // React version, default to the latest React stable release
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-react": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-will-update-set-state": 2,
    "react/require-render-return": 2,
    "react/jsx-closing-tag-location": 2,
    "react/jsx-closing-bracket-location": [2, { selfClosing: 'tag-aligned' }],
    "react/jsx-key": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-vars": 2,
  }
};