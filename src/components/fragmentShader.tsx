const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

vec3 color1 = vec3(0.0, 0.0, 1.0); // Blue
vec3 color2 = vec3(1.0, 0.0, 0.0); // Red

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    // vec3 color = vec3(0.0, abs(vUv.y - 0.5) * 0.8 * (1.0 - distort) + 0.2, abs(vUv.y - 0.5) * 1.2 * (1.0 - distort) + 0.5); // Dark blue
    // vec3 color = vec3(1.0, abs(vUv.y - 0.5) * 2.0 * (1.0 - distort), 0.0);  // Orange                     

    // vec3 color = vec3(
    // 0.0,
    // abs(vUv.y - 0.5) * 0.6 * (1.0 - distort) + 0.4,
    // abs(vUv.y - 0.5) * 1.5 * (1.0 - distort) + 0.7);

    // float sunlight = sin(vUv.x * 20.0 + u_time * 2.0) * 0.1;
    // color += sunlight;


//    vec2 rotatedUv = vec2(
//     cos(u_time) * (vUv.x - 0.5) - sin(u_time) * (vUv.y - 0.5),
//     sin(u_time) * (vUv.x - 0.5) + cos(u_time) * (vUv.y - 0.5)
//     );
//     rotatedUv += 0.5;

//     float r = abs(rotatedUv.x);
//     float g = abs(rotatedUv.y);
//     float b = abs(rotatedUv.x - rotatedUv.y);

//     vec3 color = vec3(
//         r * (0.5 + 0.5 * sin(u_time)), 
//         g * (0.5 + 0.5 * sin(u_time + 2.0)), 
//         b * (0.5 + 0.5 * sin(u_time + 4.0))
//     );
    
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
