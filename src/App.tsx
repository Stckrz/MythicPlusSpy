import { useState } from 'react';
import './App.css';
import { TitleBar } from 'components/titlebar/titlebar';
import { CharacterForm } from 'components/characterform/characterform';
import { RewardDisplay } from 'components/fetchruns/fetchruns';

function App() {
	const [data, setData] = useState([])
	return (
		<>
			<div>hello</div>
			<div className="bg-cyan-100 h-lvh flex-col align-middle justify-start w-lvw ">
				<TitleBar />
				<div className="bg-cyan-100 w-lvw border-sky-200  flex flex-col justify-start align-middle">
					<CharacterForm setData={setData} />
					<RewardDisplay data={data} />
				</div>
			</div>
		</>
	);
}

export default App;
