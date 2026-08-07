import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';

type Color = {
  name: string;
  code: string;
};

const colors: Color[] = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Blue', code: '#036094' },
  { name: 'Green', code: '#00FF00' },
  { name: 'Yellow', code: '#FFFF00' },
];

const getRandomColor = (): Color => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const shuffle = (): string[] => {
  const shuffled = [...colors];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map((color) => color.code);
};

const ColorGame: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<Color>(getRandomColor());
  const [score, setScore] = useState(0);
  const [buttonBackgrounds, setButtonBackgrounds] = useState<string[]>(shuffle);

  const handleColorSelection = (selectedColor: Color) => {
    if (selectedColor.name === currentColor.name) {
      setScore(score + 1);
      setCurrentColor(getRandomColor());
    } else {
      setScore(0);
    }
    setButtonBackgrounds(shuffle());
  };

  return (
    <section id="game" className="bg-gray-50">
      <div className="container section">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3 justify-center">
          <FaGamepad className="w-8 h-8 text-red-600" />
          Color Matcher
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Press the button whose color matches the box. Every correct match earns you a point.
        </p>
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-900 mb-6">
            Score: <span className="text-red-600">{score}</span>
          </p>
          <div
            data-testid="color-square"
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: currentColor.code,
            }}
            className="rounded-xl shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Color: {currentColor.name}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {colors.map((color, index) => (
              <button
                key={color.name}
                onClick={() => handleColorSelection(color)}
                style={{ backgroundColor: buttonBackgrounds[index] }}
                className="font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105"
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorGame;
