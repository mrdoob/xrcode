import * as THREE from 'https://unpkg.com/three@0.130.1/build/three.module.js';

function ConsoleTexture( width, height ) {

	const canvas = document.createElement( 'canvas' );
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext( '2d' );
	context.fillStyle = '#000';
	context.fillRect( 0, 0, width, height );

	const texture = new THREE.CanvasTexture( canvas );

	return {
		getTexture: function () {

			return texture;

		},
		setText: function ( value ) {

			context.fillStyle = '#000';
			context.fillRect( 0, 0, width, height );

			context.font = 'bold 24px Menlo,Lucida Console,Courier New';
			context.fillStyle = "#fff";
			context.fillText( value, 20, 40 );

			texture.needsUpdate = true;

		}
	}

}

export { ConsoleTexture }
