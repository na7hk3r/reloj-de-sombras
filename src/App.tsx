import React, { useState, useEffect } from 'react';
import Story from './components/Story';
import BinaryInput from './components/BinaryInput';
import Laboratory from './components/Laboratory';

function App() {
  const [binaryInput, setBinaryInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);
  const [revealedNumber, setRevealedNumber] = useState('');
  const [currentSection, setCurrentSection] = useState('story');
  const [storyVisible, setStoryVisible] = useState(false);
  const [transformationSteps, setTransformationSteps] = useState<string[]>([]);

  useEffect(() => {
    setStoryVisible(true);
  }, []);

  const handleBinaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^01]/g, '').slice(0, 7);
    setBinaryInput(value);
    setShowError(false);
  };

  const animateTransformation = () => {
    const steps = [
      '1001001', // Original binary
      '1001001 = 64 + 8 + 1',
      '1001001 = 73',
      '73'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setTransformationSteps(steps.slice(0, currentStep + 1));
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setRevealedNumber('73');
          setTimeout(() => {
            setCurrentSection('lab');
          }, 2000);
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  const validateCode = () => {
    if (binaryInput === '1001001') {
      setIsCorrect(true);
      animateTransformation();
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {currentSection === 'story' ? (
        <div className="container mx-auto px-4 py-12 mb-32">
          <Story storyVisible={storyVisible} binaryInput={binaryInput} />
          <BinaryInput
            binaryInput={binaryInput}
            isCorrect={isCorrect}
            showError={showError}
            handleBinaryInput={handleBinaryInput}
            validateCode={validateCode}
          />
          {isCorrect && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-lg transition-all duration-1000">
              <div className="flex flex-col items-center space-y-4">
                {transformationSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`text-4xl md:text-6xl font-mono text-gold animate-fade-in ${
                      index === transformationSteps.length - 1 ? 'animate-glow' : ''
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Laboratory />
      )}
    </div>
  );
}

export default App;