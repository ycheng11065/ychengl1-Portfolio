// const fragmentShader = `
// uniform float u_intensity;
// uniform float u_time;

// varying vec2 vUv;
// varying float vDisplacement;

// // Adjust the blue shades and define white as a glowing color
// vec3 blue1 = vec3(0.0, 0.4, 1.0); // Lighter Blue
// vec3 blue2 = vec3(0.0, 0.2, 0.7); // Slightly Darker Blue
// vec3 white = vec3(1.0, 1.0, 1.0); // White

// void main() {
//     float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
//     // Blend between the two blue shades based on UV coordinates and distortion
//     float mixValue = smoothstep(0.0, 1.0, vUv.y + distort);
//     vec3 color = mix(blue1, blue2, mixValue);
    
//     // Create an inner glow effect for the white light
//     float distanceToCenter = length(vUv - 0.5); // Calculate distance from the center
//     float glow = exp(-distanceToCenter * 10.0); // Create a glowing effect based on distance
//     vec3 innerGlow = white * glow * 0.5; // Control intensity and size of the glow

//     // Mix the glow with the blue shades
//     color = mix(color, innerGlow, 0.4); // Add the inner glow to the blue color

//     gl_FragColor = vec4(color, 1.0);
// }
// `;

// export default fragmentShader;


const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

// Define two distinct shades of lighter blue
vec3 blue1 = vec3(0.5, 0.7, 1.0); // Lighter Blue
vec3 blue2 = vec3(0.2, 0.5, 0.9); // Light Blue

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Mix between two blue shades based on distortion and UV coordinates
    float mixValue1 = smoothstep(0.0, 1.0, vUv.y + distort);
    vec3 color = mix(blue1, blue2, mixValue1);

    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
