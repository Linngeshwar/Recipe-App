import React,{useState} from "react";

function recipe(props){
    const [isOpen, setIsOpen] = useState(false);

    const togglepopup = () => {
        setIsOpen(!isOpen);
    };
    const [checkedIngredients, setCheckedIngredients] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedIngredients((prev) => {
            if (prev.includes(index)) { 
                return prev.filter((i) => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    return (
        <>
            <div className="flex flex-col bg-[#cacace] p-5 rounded-lg w-[15rem] justify-content items-center animate-zoomIn transition-all duration-500 ease-in-out cursor-pointer hover:bg-[#b5b5b8]" onClick={togglepopup}>
                <img className="w-[10rem] h-[10rem] rounded-lg" src={props.url} alt={props.title} />
                <h1 className="text-s font-bold text-black text-wrap overflow-hidden text-ellipsis" style={{ wordWrap: "break-word" }}>{props.title}</h1>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000b8] flex justify-center items-center animate-fadeIn transition-all duration-300 ease-in-out z-50">
                    <div className="flex flex-col items-start bg-[#cacace] w-[60%] h-[80%] p-5 rounded-lg relative overflow-y-scroll scroll-smooth custom-scrollbar">
                        <h2 className="text-2xl text-black cursor-pointer absolute top-4 right-4" onClick={togglepopup}>X</h2>
                        <div className="mt-[2rem]">
                        {props.ingredients.map((ingredient, index) => (
                            <div key={index} className="flex items-center p-1">
                                <input type="checkbox" className="mr-3 outline-none active:outline-none hover:cursor-pointer size-5 rounded-md " checked={checkedIngredients.includes(index)} onChange={() => handleCheckboxChange(index)}/>
                                <p className={`text-md text-black ${checkedIngredients.includes(index) ? 'line-through' : ''}`}>
                                    {ingredient}
                                </p>
                            </div>
                        ))}
                        </div>
                        <div className="mt-[1rem]">
                        {props.instructions.map((instruction, index) => (
                            <div key={index} className="flex flex-row items-start">
                                <p className="text-md text-black font-semibold mr-2">{index + 1}.</p>
                                <p className="text-md text-black text-left">{instruction}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default recipe;