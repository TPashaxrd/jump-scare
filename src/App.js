import React, { useEffect, useState } from 'react';
import FlComp from './components/FullscreenComponent';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showComp, setShowComp] = useState(false);

  useEffect(() => {
    console.log("Rahatsızlık ve diğer hiç bir şeyden Sorumlu değiliz.")
    console.log("Siteye girdiğiniz zaman tüm sorumlulukları kendiniz")
    console.log("Kabul etmiş olursunuz. / SORUMLULUK REDDİ ")
  })

  const handleFullscreen = () => {
    setIsVisible(false);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }

    console.log("HAQAKSDHGWHASGDHGWAJDHGAJHGDAWDAW")
    console.log("PUHAHAUHASHDKJHQADWHJKWQADHJKAWDJKHAWKJLDHAWD")
    console.log("ASDKLJLKASDAHWLKDJLKQWENTGFKJQWENJTFKGNHWEJGHTFKJGT")
    console.log("KEDKLFQWEDLKQWKDLKDWLJW;D")  
    console.log("HAHAJLSKDJLKWJALDKJLKAWJDLAWJDLKAWDJWWDLKJDKLWKLDJWAD")
    console.log("KUKREDIM ULANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")  
  };

  const openCam = () => {
    setShowComp(true);
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'F11' || event.key === "F12" || (event.ctrlKey && event.key === "r") || event.key === "F5") {
        event.preventDefault(); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100vw', 
      margin: 0, 
      backgroundColor: '#282c34',
      color: 'white',
      flexDirection: 'column',
    }}>
      {isVisible && (
        <button
          style={{
            cursor: 'pointer',
            fontFamily: 'Ubuntu Mono, monospace',
            fontSize: '30px',
            padding: '20px 40px',
            borderRadius: '50px',
            background: 'linear-gradient(45deg, #ff6ec7, #ff9a8b)',
            border: 'none',
            color: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onClick={() => { handleFullscreen(); openCam(); }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Can you wanna see my +18 Pictures?
        </button>
      )}
            {isVisible && (

      <a
      style={{
        color: 'green',
        marginTop: '5px',        
      }}
      >I'm so horn :)</a>
      )}
      {showComp && <FlComp />}
    </div>
  );
};

export default App;
