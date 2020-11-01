const React = require( 'react');
const { ThemeProvider } =require ('theme-ui');
const {deep} =require('@theme-ui/presets');
const {Provider} = require("./netlifyidentityContext")


const newTheme = {
  ...deep,
  sizes:{container : 1024}
};


module.exports = ({element}) => (
  <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
)