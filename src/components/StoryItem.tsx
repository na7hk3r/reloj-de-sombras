import React from 'react';

interface StoryItemProps {
  index: number;
  binaryInput: string;
  statement: string;
  hint: string;
  correctValue: '1' | '0';
}

const StoryItem: React.FC<StoryItemProps> = ({ index, binaryInput, statement, hint, correctValue }) => {
  const isCorrectInput = binaryInput[index] === correctValue;

  return (
    <div className={`p-6 border ${isCorrectInput ? 'border-gold/20' : 'border-silver/20'} rounded-lg bg-card backdrop-blur-sm animate-fade-in`} style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
      {isCorrectInput && <p><span className={`text-${correctValue === '1' ? 'gold' : 'silver'} font-display`}>({correctValue} - {correctValue === '1' ? 'true' : 'false'})</span><br/></p>}
      <p>{statement}</p>
      {isCorrectInput && (
        <p className="mt-2 text-gray-400">{hint}</p>
      )}
    </div>
  );
};

export default StoryItem;