// to use this, just put images in the oldimg folder and run this command from inside the folder in the command line
// node ./index.js

var im = require('imagemagick');
var fs = require('fs');

var inputFolder = 'oldimg';
var outputFolder = 'newimg';
var targetWidth = 600; // desired width in pixels

// Read the list of files in the input folder
fs.readdir(inputFolder, function(err, files) {
   if (err) {
      console.error('Error reading input folder:', err);
      return;
   }

   // Process each file in the input folder
   files.forEach(function(file) {
      // Construct the input and output paths for each file
      var inputPath = inputFolder + '/' + file;
      var outputPath = outputFolder + '/' + file;

      // Set the arguments for the image conversion
      var args = [
         inputPath,
         '-filter',
         'Lanczos',
         '-resize',
         targetWidth + 'x',
         '-unsharp',
         '0x0.8+0.5+0',
         '-quality',
         '80',
         '-strip',
         '-define',
         'jpeg:optimize-coding=true',
         '-define',
         'png:compression-filter=5',
         '-define',
         'png:compression-level=9',
         '-define',
         'png:compression-strategy=1',
         '-define',
         'png:exclude-chunk=all',
         '-colorspace',
         'sRGB',
         outputPath
      ];

      // Perform the image conversion
      im.convert(args, function(err, stdout, stderr) {
         if (err) {
            console.error('Error converting image:', inputPath, err);
         } else {
            // Compare file sizes before saving the output
            var originalSize = fs.statSync(inputPath).size;
            var newSize = fs.statSync(outputPath).size;

            if (newSize > originalSize) {
               console.warn('Resized image is larger than the original:', inputPath);
               fs.unlinkSync(outputPath); // Delete the oversized output file
            } else {
               console.log('Image converted:', inputPath);
            }
         }
      });
   });
});
