import { AbsoluteFill } from 'remotion';
import React from 'react';
import { loadFont } from "@remotion/google-fonts/PlusJakartaSans";

const { fontFamily } = loadFont();

export const Intro: React.FC = () => {
  // Show the intro frame for 300ms (12 frames at 24fps)
  return (
    <AbsoluteFill style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontFamily, fontSize: 100, color: 'white', padding: '50px', textAlign: 'center', textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}>One Summer Day✨</div>
    </AbsoluteFill>
  );
}
