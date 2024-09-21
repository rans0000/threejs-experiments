export type TBuildScene = {
    camera: 'orbit' | 'pointerLock';
    cameraPos: [number, number, number];
    fov: number;
    lightType: 'spot' | 'directional';
};
