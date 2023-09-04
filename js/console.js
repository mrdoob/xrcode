import * as THREE from "three";

// Define a function called ConsoleTexture that takes width and height as parameters
function ConsoleTexture(width, height) {
  // Create a canvas element with the specified width and height
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  // Get the 2D rendering context of the canvas
  const context = canvas.getContext("2d");

  // Set the fill style to black and fill the entire canvas with it
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);

  // Create a new texture using the canvas
  const texture = new THREE.CanvasTexture(canvas);

  // Return an object with two methods: getTexture and setText
  return {
    // Method to get the texture
    getTexture: function () {
      return texture;
    },
    // Method to set the text on the canvas
    setText: function (value) {
      // Clear the canvas by filling it with black
      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);

      // Set the font style and color for the text
      context.font = "bold 24px Menlo,Lucida Console,Courier New";
      context.fillStyle = "#fff";

      // Draw the text on the canvas at position (20, 40)
      context.fillText(value, 20, 40);

      // Update the texture to reflect the changes
      texture.needsUpdate = true;
    },
  };
}

// Export the ConsoleTexture function
export { ConsoleTexture };
