import { useState } from 'react'
import { fetchMythicRuns } from 'library/apifunctions';

interface CharacterFormProps {
	setData: React.Dispatch<React.SetStateAction<any>>,
}
export const CharacterForm: React.FC<CharacterFormProps> = ({ setData }) => {
	const [region, setRegion] = useState("us")
	const [realm, setRealm] = useState("area52")
	const [userName, setUserName] = useState("yodafotm")

	function sendDataHandler() {
		fetchMythicRuns(region, realm.toLowerCase(), userName.toLowerCase()).then(
			(items) => setData(items)
		)
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>, setfunction: React.Dispatch<React.SetStateAction<string>>) {
		setfunction(e.target.value)
	}

	function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>, setfunction: React.Dispatch<React.SetStateAction<string>>) {
		setfunction(e.target.value)
	}

	return (
		<>
			<div className="bg-cyan-50 flex flex-col items-center">
				<div className="space-y-2 w-80 flex flex-col items-center">
					{/* <input className="border-2 p-2 border-red-50 w-80 rounded focus:outline-red-100" onChange={(e) => handleChange(e, setRegion)} /> */}

					<label>
						Region:
						<select className="hover:border-red-300 w-80 h-12 bg-gray-50 border-2 p-2 border-red-50 rounded focus:outline-none" onChange={(e) => {handleSelectChange(e, setRegion)}} name="region" id="region">
							<option value="us">US</option>
							<option value="eu">EU</option>
							<option value="kr">KR</option>
							<option value="tw">TW</option>
						</select>
					</label>

					<input value={realm} className="hover:border-red-300 bg-gray-50 border-2 p-2 border-red-50 w-80 rounded focus:outline-red-100" onChange={(e) => handleChange(e, setRealm)} />
					<input value={userName} className="hover:border-red-300 bg-gray-50 border-2 p-2 border-red-50 w-80 rounded focus:outline-red-100" onChange={(e) => handleChange(e, setUserName)} />
				</div>
				<div className="space-x-20 p-2 space-y-96">
					<button className="transition-colors duration-300 hover:bg-red-200 active:border-red-300 text-cyan-50 h-12 w-32 border border-red-100 rounded bg-red-100" onClick={sendDataHandler}>click me</button>
				</div>
			</div>
		</>
	)
}
