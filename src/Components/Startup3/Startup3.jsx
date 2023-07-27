import React from 'react'
import './Startup3.css'

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';

const Startup3 = () => {

  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.3,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [1, 1,1 ,1],
      glowColor: [1, 1,1],
      markers: [
        { location: [37.78, -122.412], size: 0.05},
        { location: [28.64041, 77.04094], size: 0.05},
        { location: [21.13565, 79.10569], size: 0.05},
        { location: [11.02453, 76.93835], size: 0.05},
        { location: [52.52, 13.405], size: 0.05},
        { location: [35.676, 139.65], size: 0.05},
        { location: [-34.60, -58.38], size: 0.05},
      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          phi += 0.005
        } 
        state.phi = phi + r.get()
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => canvasRef.current.style.opacity = '1')
    return () => globe.destroy()
  }, [])
  return (
    <div className='startup3'>


    <div className="st3-left">
          <div className="st-heading">
          Investors from 60 countries investing via the Droneairgear technology platform.
          </div>


          {/* <p>Meet the changemakers, pioneers and trendsetters.</p> */}




{/* 
          <div className="st3-button">
              Join Now
          </div> */}
    </div>

    <div className="st3-right">
    <div style={{
    width: 800,
    // maxWidth: 200,
    aspectRatio: 1,
    margin: 'auto',
    position: 'relative',
  }}>
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        canvasRef.current.style.cursor = 'grabbing';
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        canvasRef.current.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        canvasRef.current.style.cursor = 'grab';
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
      style={{
        width: '100%',
        height: '100%',
        cursor: 'grab',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
    />
  </div>


    </div>


  </div>
  )
}

export default Startup3
