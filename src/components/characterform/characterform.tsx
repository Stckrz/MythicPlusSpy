import { useState } from 'react'
import { fetchMythicRuns } from 'library/apifunctions';

interface CharacterFormProps{
	setData: React.Dispatch<React.SetStateAction<any>>,
}
export const CharacterForm: React.FC<CharacterFormProps> = ({setData}) => {
	const [region, setRegion] = useState("us")
	const [realm, setRealm] = useState("area52")
	const [userName, setUserName] = useState("yodafotm")

	function sendDataHandler(){
		fetchMythicRuns(region, realm, userName).then(
			(items) => setData(items)
		)
	}

	function handleRegionChange(e: React.ChangeEvent<HTMLInputElement>){
		setRegion(e.target.value)
	}

	function handleRealmChange(e: React.ChangeEvent<HTMLInputElement>){
		setRealm(e.target.value)
	}

	function handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>){
		setUserName(e.target.value)
	}

	return(
	<>
			<div>
				<input onChange={handleRegionChange}/>
				<input onChange={handleRealmChange}/>
				<input onChange={handleUserNameChange}/>
				<button onClick={sendDataHandler}>click me</button>
			</div>
	</>
	)
}
