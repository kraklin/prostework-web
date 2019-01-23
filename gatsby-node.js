const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
   actions.setWebpackConfig({
     resolve: {
        alias: {
          Blocks: path.resolve(__dirname, 'src/components/Blocks'),
          Layout: path.resolve(__dirname, 'src/components/Layout'),
          Images: path.resolve(__dirname, 'src/images'),
        },
     },
  })
};
