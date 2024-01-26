import { useState } from 'react';
import './App.css';
import { CharacterForm } from 'components/characterform/characterform';
import { RewardDisplay } from 'components/fetchruns/fetchruns';

function App() {
	const [data, setData] = useState([])
	return (
		<div className="App">
			<CharacterForm setData={setData} />
			<RewardDisplay data={data}/>
		</div>
	);
}

export default App;
