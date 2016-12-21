#version 330 core

in vec3 positionColor; // Output a color to the fragment shader
in vec3 ourColor;
in vec2 TexCoord;

// GLSL has a built-in data-type for texture objects
uniform sampler2D ourTexture;

out vec4 color;

void main()
{
	//color = vec4(ourColor, 1.0f);
	//color = vec4(positionColor, 1.0f); // Test: Negative values is clamped to 0 => black
	color = texture(ourTexture, TexCoord); 
	color = texture(ourTexture, TexCoord) * vec4(ourColor, 1.0f); 
};