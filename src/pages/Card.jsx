import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "../components/Band";
import {
  Environment,
  Lightformer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useControls } from "leva";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/hammad.glb");
useTexture.preload("/hammadaslam.png");

const Card = () => {
  const { debug } = useControls({ debug: false });

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <div>this is Hammad Aslam</div>
      <div
        style={{ width: "100%", position: "absolute", height: "100%", top: 0 }}
      >
        <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
          <ambientLight intensity={Math.PI} />
          <Physics
            debug={debug}
            interpolate
            gravity={[0, -40, 0]}
            timeStep={1 / 60}
          >
            <Band />
          </Physics>
          <Environment background blur={0.75}>
            <color attach="background" args={["black"]} />
            <Lightformer
              intensity={2}
              color="white"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="white"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="white"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
      </div>
    </div>
  );
};

export default Card;
