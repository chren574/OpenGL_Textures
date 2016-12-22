#version 330 core

in vec3 positionColor; // Output a color to the fragment shader
in vec3 ourColor;
in vec2 TexCoord;

// GLSL has a built-in data-type for texture objects
uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;

uniform float sin;

out vec4 color;

void main()
{
	//color = texture(ourTexture1, TexCoord); 
	//color = texture(ourTexture1, TexCoord) * vec4(ourColor*DT, 1.0f);
	color = mix(texture(ourTexture1, TexCoord + DT), texture(ourTexture2, vec2( TexCoord.s, TexCoord.t + DT)), 0.2f); 
};