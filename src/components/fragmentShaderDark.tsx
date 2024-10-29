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