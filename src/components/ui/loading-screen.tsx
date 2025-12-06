'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Store original overflow and scrollbar styles
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    const originalHtmlOverflow = htmlElement.style.overflow;
    const originalBodyOverflow = bodyElement.style.overflow;
    const originalBodyOverflowY = bodyElement.style.overflowY;
    const originalBodyOverflowX = bodyElement.style.overflowX;
    
    // Disable scroll while loading - apply to both html and body
    htmlElement.style.overflow = 'hidden';
    bodyElement.style.overflow = 'hidden';
    bodyElement.style.overflowY = 'hidden';
    bodyElement.style.overflowX = 'hidden';
    
    // Simulate loading progress with realistic timing
    const duration = 2000; // 2 seconds for premium feel
    const interval = 50; // Update every 50ms for smooth animation
    const increment = 100 / (duration / interval);
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        
        // Fade out after reaching 100%
        setTimeout(() => {
          setIsLoading(false);
          
          // Restore scroll with multiple approaches to ensure scrollbar appears
          setTimeout(() => {
            // Method 1: Restore original styles
            htmlElement.style.overflow = originalHtmlOverflow || '';
            bodyElement.style.overflow = originalBodyOverflow || '';
            bodyElement.style.overflowY = originalBodyOverflowY || 'scroll';
            bodyElement.style.overflowX = originalBodyOverflowX || 'hidden';
            
            // Method 2: Force scrollbar to appear
            htmlElement.style.overflowY = 'scroll';
            bodyElement.style.overflowY = 'scroll';
            
            // Method 3: Trigger reflow multiple times
            void htmlElement.offsetHeight;
            void bodyElement.offsetHeight;
            
            // Method 4: Ensure scrollbar is visible with a small delay
            setTimeout(() => {
              htmlElement.style.overflowY = 'scroll';
              bodyElement.style.overflowY = 'scroll';
              void htmlElement.offsetHeight;
              void bodyElement.offsetHeight;
            }, 10);
            
            onComplete();
          }, 100);
        }, 300); // Slightly longer fade-out for premium feel
      }
      setProgress(currentProgress);
    }, interval);

    return () => {
      clearInterval(timer);
      // Cleanup - restore original styles
      htmlElement.style.overflow = originalHtmlOverflow || '';
      bodyElement.style.overflow = originalBodyOverflow || '';
      bodyElement.style.overflowY = originalBodyOverflowY || 'scroll';
      bodyElement.style.overflowX = originalBodyOverflowX || 'hidden';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 50%, #0f172a 100%)'
          }}
        >
          {/* Animated background grid */}
          <motion.div
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15, 23, 42, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Premium Loading Container */}
          <div className="relative z-10">
            {/* Outer glow ring with pulse */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px rgba(15, 141, 255, 0.4)',
                  '0 0 30px rgba(15, 141, 255, 0.6)',
                  '0 0 45px rgba(15, 141, 255, 0.4)',
                  '0 0 15px rgba(15, 141, 255, 0.4)'
                ],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
            />

            {/* Middle glow ring */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 10px rgba(40, 199, 250, 0.5)',
                  '0 0 20px rgba(40, 199, 250, 0.7)',
                  '0 0 30px rgba(40, 199, 250, 0.5)',
                  '0 0 10px rgba(40, 199, 250, 0.5)'
                ],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full"
            />

            {/* Main glass ring with enhanced effects */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-blue-500/20 backdrop-blur-md">
              {/* Glass effect background */}
              <div 
                className="absolute inset-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(15, 141, 255, 0.15) 0%, transparent 60%)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'inset 0 0 20px rgba(15, 141, 255, 0.1)'
                }}
              />

              {/* Premium neon sweep animation */}
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full overflow-hidden"
              >
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(15, 141, 255, 0.8) 30deg, transparent 60deg)',
                  }}
                />
                {/* Secondary sweep for premium effect */}
                <motion.div
                  animate={{
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(40, 199, 250, 0.6) 45deg, transparent 90deg)',
                  }}
                />
              </motion.div>

              {/* Progress ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                {/* Background ring */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="rgba(15, 141, 255, 0.1)"
                  strokeWidth="3"
                />
                {/* Progress ring with gradient */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  style={{ 
                    filter: 'drop-shadow(0 0 12px rgba(15, 141, 255, 0.8))',
                    transition: 'stroke-dashoffset 0.05s ease-out'
                  }}
                />
                {/* Inner glow ring */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="43%"
                  fill="none"
                  stroke="rgba(40, 199, 250, 0.2)"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f8dff">
                      <animate attributeName="stop-color" values="#0f8dff;#28c7fa;#0f8dff" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#28c7fa">
                      <animate attributeName="stop-color" values="#28c7fa;#0f8dff;#28c7fa" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#0f8dff">
                      <animate attributeName="stop-color" values="#0f8dff;#28c7fa;#0f8dff" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>

              {/* Center content with enhanced glow */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Center pulse glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      '0 0 20px rgba(15, 141, 255, 0.8)',
                      '0 0 40px rgba(40, 199, 250, 1)',
                      '0 0 20px rgba(15, 141, 255, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                />
                
                {/* Progress text with enhanced styling */}
                <motion.div
                  key={progress}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 text-sm md:text-base font-bold text-white"
                  style={{
                    textShadow: '0 0 8px rgba(15, 141, 255, 0.8)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em'
                  }}
                >
                  {Math.round(progress)}%
                </motion.div>
              </div>
            </div>

            {/* Enhanced loading text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-center"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  textShadow: [
                    '0 0 10px rgba(15, 141, 255, 0.6)',
                    '0 0 20px rgba(40, 199, 250, 0.8)',
                    '0 0 10px rgba(15, 141, 255, 0.6)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-sm md:text-base font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
                style={{
                  letterSpacing: '0.1em'
                }}
              >
                Autoxence: Websites which bring clients not just clicks
              </motion.div>
              
              {/* Progress indicator dots */}
              <div className="flex justify-center space-x-2 mt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    style={{
                      boxShadow: '0 0 4px rgba(15, 141, 255, 0.6)'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;