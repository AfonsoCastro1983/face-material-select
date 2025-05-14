
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CameraView = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Access the user's camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    // Clean up function to stop the camera when component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const startExperience = () => {
    setHasStarted(true);
    setIsRecording(true);
    
    // Start countdown from 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            // After recording is complete, navigate to the materials page
            navigate("/materials");
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Camera video feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute h-full w-full object-cover"
      />

      {/* Dark overlay - shown initially or when not started */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          hasStarted ? "opacity-0" : "opacity-50"
        }`}
      />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-white">
        {!hasStarted ? (
          <button
            onClick={startExperience}
            className="rounded-lg bg-[#D3E4FD] px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all hover:bg-[#1EAEDB] hover:text-white"
          >
            Inicie Aqui
          </button>
        ) : (
          <div className="flex flex-col items-center space-y-8">
            <p className="text-center text-2xl font-medium">
              Posicione seu rosto no centro da tela
            </p>
            {isRecording && (
              <div className="flex flex-col items-center">
                <div className="mb-2 h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
                <p className="text-xl">{countdown}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraView;
