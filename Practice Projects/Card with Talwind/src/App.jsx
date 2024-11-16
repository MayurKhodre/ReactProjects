import image from './assets/sukuna.png';

function App() {
	return (
		<>
			<div className="flex justify-center items-center bg-slate-950 h-screen">
				<div className="relative w-2/5 h-2/4 overflow-hidden rounded-xl bg-white border-y border-x border-slate-700">
					<img src={image} alt="Image not found" className="w-full h-full" />
					<div className="absolute bottom-4 left-4 bg-black bg-opacity-60 rounded-lg">
						<h2 className="text-pink-600 text-2xl font-semibold">Jujutsu Kaisen</h2>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
