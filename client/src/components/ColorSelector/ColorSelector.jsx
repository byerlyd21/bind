import React from 'react';

const ColorSelector = ({ onColorChange }) => {
  const handleColorChange = (theme) => {
    switch (theme) {
      case 'melon-pop':
        onColorChange({
          primaryLight: '--theme-melon-pop-primary-light',
          primaryDark: '--theme-melon-pop-primary-dark',
          secondaryLight: '--theme-melon-pop-secondary-light',
          secondaryDark: '--theme-melon-pop-secondary-dark',
        });
        break;
      case 'melon-muted':
        onColorChange({
          primaryLight: '--theme-melon-muted-primary-light',
          primaryDark: '--theme-melon-muted-primary-dark',
          secondaryLight: '--theme-melon-muted-secondary-light',
          secondaryDark: '--theme-melon-muted-secondary-dark',
        });
        break;
      case 'blue':
        onColorChange({
          primaryLight: '--theme-blue-primary-light',
          primaryDark: '--theme-blue-primary-dark',
          secondaryLight: '--theme-blue-secondary-light',
          secondaryDark: '--theme-blue-secondary-dark',
        });
        break;
      case 'green':
        onColorChange({
          primaryLight: '--theme-green-primary-light',
          primaryDark: '--theme-green-primary-dark',
          secondaryLight: '--theme-green-secondary-light',
          secondaryDark: '--theme-green-secondary-dark',
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='container'>
      <button onClick={() => handleColorChange('melon-pop')}>Melon-pop</button>
      <button onClick={() => handleColorChange('melon-muted')}>Melon-muted</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
    </div>
  );
};

export default ColorSelector;
