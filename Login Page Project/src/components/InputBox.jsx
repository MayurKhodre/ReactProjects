import React from 'react';

function InputBox({
	currencyOptions = [],
	label,
	onAmountChange,
	onCurrencyChange,
	value,
	selectedCurrency,
	amountFieldDisabled = false
	}) {
	
	return (
		<>
			<div className="input-container w-full bg-white p-3 flex rounded-lg gap-4">
				<div className="left w-1/2 flex flex-col">
					<label htmlFor="toField" className="mb-1 text-gray-700">{label}</label>
					<input
						type='number'
						placeholder={label} 
						value={value}
						id="toField" 
						disabled={ amountFieldDisabled }
						className="border border-gray-300 p-2 rounded"
						onChange={(e) => onAmountChange(Number(e.target.value))}
					/>
				</div>
				<div className="right w-1/2 flex flex-col">
					<label htmlFor="forField" className="mb-1 text-gray-700">Currency Type</label>
					<select id="forField" className="border border-gray-300 p-2 rounded"
						onChange={(e) => onCurrencyChange(e.target.value)} value={selectedCurrency}>
						{currencyOptions.map((element) => (
							<option key={element} value={element}>{element}</option>
						))}
					</select>
				</div>
			</div>
		</>
	);
}

export default InputBox;
