import React, { useState, useEffect } from "react";

const RandomIcon = ({ src, alt, top, left ,opacity,animationClass}) => {
    return (
      <img 
        src={src} 
        className={`w-12 h-12 absolute transform transition-all duration-300 ease-in-out ${animationClass}`} 
        style={{ top: `${top}%`, left: `${left}%`, opacity: opacity }}
        alt={alt}
      />
    );
  };
  

  function Recipe(){
    const [iconAnimation, setIconAnimation] = useState({
        Italian : '',
        Indian : '',
        Japanese : ''
    });

    const icons = [
        { src: "/assets/Recipe Favicons/Italian/pizza.png", top: 12, left: 10 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},
        { src: "/assets/Recipe Favicons/Italian/farfalle.png", top: 35, left: 2 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},
        { src: "/assets/Recipe Favicons/Italian/gelato.png", top: 60, left: 7 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},
        { src: "/assets/Recipe Favicons/Italian/lasagna.png", top: 12, left: 75 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},
        { src: "/assets/Recipe Favicons/Italian/pasta.png", top: 29, left: 89 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},
        { src: "/assets/Recipe Favicons/Italian/tiramisu.png", top: 61, left: 83 ,opacity: iconAnimation.Italian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Italian},

        { src: "/assets/Recipe Favicons/Indian/naan.png", top: 15, left: 15 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian},
        { src: "/assets/Recipe Favicons/Indian/biryani.png", top: 38, left:4 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian}, 
        { src: "/assets/Recipe Favicons/Indian/samosa.png", top: 63, left: 10 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian},
        { src: "/assets/Recipe Favicons/Indian/tandoori.png", top: 15, left: 75 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian},
        { src: "/assets/Recipe Favicons/Indian/paneer.png", top: 33, left: 85 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian},
        { src: "/assets/Recipe Favicons/Indian/dosa.png", top: 63, left: 75 ,opacity: iconAnimation.Indian === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Indian},        

        { src: "/assets/Recipe Favicons/Japanese/ramen.png", top: 10, left: 13 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese},
        { src: "/assets/Recipe Favicons/Japanese/oden.png", top: 35, left: 6 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese},
        { src: "/assets/Recipe Favicons/Japanese/onigiri.png", top: 59, left: 8 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese},
        { src: "/assets/Recipe Favicons/Japanese/tempura.png", top: 11, left: 79 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese},
        { src: "/assets/Recipe Favicons/Japanese/tonkatsu.png", top: 35, left: 90 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese},
        { src: "/assets/Recipe Favicons/Japanese/sushi.png", top: 64, left: 79 ,opacity: iconAnimation.Japanese === 'animate-zoomIn' ? 1 : 0,animationClass:iconAnimation.Japanese}
    ];
    const handleMouseOver = (cuisine) => {
        setIconAnimation((prev) => ({
          ...prev,
          [cuisine]: 'animate-zoomIn',
        }));
      };
    
      const handleMouseLeave = (cuisine) => {
        setIconAnimation((prev) => ({
          ...prev,
          [cuisine]: 'animate-zoomOut',
        }));
      };

    return(
        <div className="w-[75vh] mx-20 my-10 relative">
            {/* Icon container */}
            <div className="absolute inset-0 -m-20"> {/* Negative margin to extend beyond text area */}
                {icons.map((icon, index) => (
                    <RandomIcon 
                        key={index} 
                        src={icon.src} 
                        alt={`Cuisine icon ${index + 1}`} 
                        top={icon.top} 
                        left={icon.left} 
                        opacity={icon.opacity}
                        animationClass={icon.animationClass}
                    />
                ))}
            </div>
            
            {/* Text content */}
            <div className="relative z-10 bg-opacity-70 p-4 rounded-lg"> {/* Added background for better readability */}
                <div className="w-full text-[#000000] text-5xl font-semibold">
                    <p className="inline-block">Want to find </p>
                    <p className="inline-block text-[#6f6f7b] ml-4 hover:cursor-default hover:text-[#5353bf] transition-colors duration-150 ease-in-out"
                        onMouseOver={() => handleMouseOver('Italian')}
                        onMouseLeave={() => handleMouseLeave('Italian')}
                        >Italian </p>
                    <p className="inline-block ml-4">, </p>
                    <p className="inline-block text-[#6f6f7b] hover:cursor-default hover:text-[#5353bf] transition-colors duration-150 ease-in-out"
                        onMouseOver={() => handleMouseOver('Indian')}
                        onMouseLeave={() => handleMouseLeave('Indian')}
                        >Indian </p>
                    <p className="inline-block ml-4">or </p>
                    <p className="inline-block text-[#6f6f7b] ml-4 hover:cursor-default hover:text-[#5353bf] transition-colors duration-150 ease-in-out"
                        onMouseOver={() => handleMouseOver('Japanese')}
                        onMouseLeave={() => handleMouseLeave('Japanese')}
                        > Japanese </p>
                    <p className="inline-block ml-4">or any dish?</p>
                </div>
            </div>
        </div>
    );
}
export default Recipe;