import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';
import InputBox from './InputBox';

function Home() {
	
	const [currencyData, setCurrencyData]  = useState({});
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [from, setFrom] = useState('usd');
	const [to, setTo] = useState('inr');
	

	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);
	
	useEffect(() => {
		axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
			.then((res) => {
				setCurrencyData(res.data[from]);
				setCurrencyOptions(Object.keys(res.data[from]));
			})
			.catch((error) => {
				console.log('error: ', error);
			})
	}, [from]);

	// const swap = () => {
	// 	setFrom(to);
	// 	setTo(from);
	// 	setAmount(convertedAmount);
	// 	setConvertedAmount(amount);
	// }

	const swap = () => {
		const tempAmount = amount;
		setAmount(convertedAmount);
		setConvertedAmount(tempAmount);
		setFrom(to);
		setTo(from);
	};
	  

	const convertAmount = ((e) =>  {
		console.log('submit clicked');
		e.preventDefault();
		setConvertedAmount(amount * currencyData[to]);
	})

	return (
		<>
			<Navbar />
			<div className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
				<div className="currency-container w-[30%] rounded-lg backdrop-blur-md bg-white/10 shadow-lg p-2 border border-gray-60">
					<form className='flex flex-col' onSubmit={convertAmount}>
						<InputBox
							currencyOptions = { currencyOptions }
							label='From'
							value={amount}
							onAmountChange={(number) => setAmount(number)}
							onCurrencyChange={(currency) => setFrom(currency)}
							selectedCurrency={from}
						/>
						<div className="flex justify-center">
							<button className="p-1 m-1 bg-blue-600 text-white rounded" onClick={swap}>Swap</button>
						</div>
						<InputBox
							currencyOptions = { currencyOptions }
							label='To'
							value={convertedAmount}
							onCurrencyChange={(currency) => setTo(currency)}
							amountFieldDisabled 	// amountFieldDisabled = true
							selectedCurrency={to}
						/>
						<button className='p-1 mt-[20px] bg-blue-600 text-white rounded' type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import Navbar from './Navbar';
// import InputBox from './InputBox';

// function Home() {
//   const [currencyData, setCurrencyData] = useState({});
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [from, setFrom] = useState('usd');
//   const [to, setTo] = useState('inr');
//   const [amount, setAmount] = useState(0);
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   useEffect(() => {
//     axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
//       .then((res) => {
//         setCurrencyData(res.data[from]);
//         setCurrencyOptions(Object.keys(res.data[from]));
//       })
//       .catch((error) => {
//         console.error('Error fetching currency data:', error);
//       });
//   }, [from]);

//   const swap = () => {
//     const tempAmount = amount; // Store the current amount
//     const tempCurrency = from; // Temporarily store the current "from" currency

//     setAmount(convertedAmount); // Set "amount" to the previous converted amount
//     setConvertedAmount(tempAmount); // Set "convertedAmount" to the previous amount
//     setFrom(to); // Swap the "from" currency with "to"
//     setTo(tempCurrency); // Swap the "to" currency with "from"

//     // Immediately recalculate conversion for the swapped values
//     const updatedConversionRate = currencyData[tempCurrency]; // Get the conversion rate for the swapped currencies
//     if (updatedConversionRate) {
//       setConvertedAmount(tempAmount * updatedConversionRate);
//     } else {
//       console.error('Conversion rate unavailable for swapped currencies.');
//     }
//   };

//   const convertAmount = (e) => {
//     e.preventDefault();
//     if (currencyData[to]) {
//       setConvertedAmount(amount * currencyData[to]);
//     } else {
//       console.error('Conversion rate not available for the selected currencies.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
//         <div className="currency-container w-[30%] rounded-lg backdrop-blur-md bg-white/10 shadow-lg p-2 border border-gray-60">
//           <form className="flex flex-col" onSubmit={convertAmount}>
//             <InputBox
//               currencyOptions={currencyOptions}
//               label="From"
//               value={amount}
//               onAmountChange={(number) => setAmount(number)}
//               onCurrencyChange={(currency) => setFrom(currency)}
//               selectedCurrency={from}
//             />
//             <div className="flex justify-center">
//               <button
//                 type="button"
//                 className="p-1 m-1 bg-blue-600 text-white rounded"
//                 onClick={swap}
//               >
//                 Swap
//               </button>
//             </div>
//             <InputBox
//               currencyOptions={currencyOptions}
//               label="To"
//               value={convertedAmount}
//               onCurrencyChange={(currency) => setTo(currency)}
//               amountFieldDisabled={true} // This disables the input field
//               selectedCurrency={to}
//             />
//             <button className="p-1 mt-[20px] bg-blue-600 text-white rounded" type="submit">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

