import { useState } from 'react';
import './App.css';
import { CharacterForm } from 'components/characterform/characterform';
import { RewardDisplay } from 'components/fetchruns/fetchruns';

function App() {
	const [data, setData] = useState([])
	return (
		<div className="bg-cyan-50 w-lvw border-sky-200 h-lvh flex flex-col justify-center align-middle">
			<CharacterForm setData={setData} />
			<RewardDisplay data={data}/>
		</div>
	);
}

export default App;
