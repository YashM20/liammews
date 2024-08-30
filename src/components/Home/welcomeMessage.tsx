import React, { useState, useEffect } from 'react';

interface LocationData {
  country_code: string;
}

const GreetingComponent: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('Hello!');

  const updateGreetingMessage = (country: string) => {
    let newGreeting: string;
    switch (country) {
      case 'FR': newGreeting = 'Bonjour!'; break;
      case 'ES': newGreeting = 'Hola!'; break;
      case 'NL': newGreeting = 'yoyo!'; break;
      case 'DE': newGreeting = 'Hallo!'; break;
      case 'IT': newGreeting = 'Ciao!'; break;
      case 'RU': newGreeting = 'Привет!'; break;
      case 'IN': newGreeting = 'नमस्ते!'; break; 
      case 'BR': newGreeting = 'Olá!'; break;
      case 'UA': newGreeting = 'Привіт!'; break;
      case 'DK': newGreeting = 'Hej!'; break;
      case 'NO': newGreeting = 'Hei!'; break;
      case 'IS': newGreeting = 'Halló!'; break;
      case 'AU': newGreeting = 'Gday!'; break;
      case 'CH': newGreeting = 'Hallo!'; break;
      case 'US': newGreeting = 'Howdy!'; break;
      case 'HU': newGreeting = 'Helló!'; break;
      case 'TR': newGreeting = 'Merhaba!'; break;
      default: newGreeting = 'Hello!';
    }
    setGreeting(newGreeting);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data: LocationData = await response.json();
        updateGreetingMessage(data.country_code);
      } catch (error) {
        console.error('Error fetching the location:', error);
        updateGreetingMessage(''); // Fallback to default greeting
      }
    };

    fetchLocation();
  }, []);

  return <h1 className='mb-2'>{greeting} I'm Liam, a designer and front-end developer from Cambridgeshire.</h1>;
};

export default GreetingComponent;