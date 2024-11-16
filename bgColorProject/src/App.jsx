import { useState } from 'react';

function App() {
	const [color, setColor] = useState("olive");

	// const setBGColor = (newColor) => {
	// 	setColor(newColor);
	// 	document.querySelector('.main-div').style.backgroundColor = newColor;
	// };

	return (
		<div className="main-div" style={{backgroundColor: color}}>
		{/* <div className="main-div"> */}
			<div className='color-tray'>
				<button className='btn red' onClick={() => setColor("red")}>Red</button>
				<button className='btn orange' onClick={() => setColor("orange")}>Orange</button>
				<button className='btn green' onClick={() => setColor("green")}>Green</button>
				<button className='btn blue' onClick={() => setColor("blue")}>Blue</button>
				<button className='btn yellow' onClick={() => setColor("yellow")}>Yellow</button>
				{/* <button className='btn red' onClick={() => setBGColor("red")}>Red</button>
				<button className='btn orange' onClick={() => setBGColor("orange")}>Orange</button>
				<button className='btn green' onClick={() => setBGColor("green")}>Green</button>
				<button className='btn blue' onClick={() => setBGColor("blue")}>Blue</button>
				<button className='btn yellow' onClick={() => setBGColor("yellow")}>Yellow</button> */}
			</div>
		</div>
	)
}

export default App
