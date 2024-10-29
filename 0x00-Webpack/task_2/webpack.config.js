const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Rule for image files
        type: 'asset/resource', // Use Webpack's asset/resource for image handling
        generator: {
          filename: 'images/[name][ext]', // Output image folder
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // Optimize images
        use: [
          "file-loader",
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
