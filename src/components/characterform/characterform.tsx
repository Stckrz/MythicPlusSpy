import { useState } from 'react'
import { fetchMythicRuns } from 'library/apifunctions';
import { buttonStyle, inputStyle } from 'library/twstyles/twformstyles';
import style from './characterform.module.css'
import { PiNotepadThin } from 'react-icons/pi'
import { IoClose } from 'react-icons/io5'

interface CharacterFormProps {
	setData: React.Dispatch<React.SetStateAction<any>>,
}

export const CharacterForm: React.FC<CharacterFormProps> = ({ setData }) => {
	const [region, setRegion] = useState("us")
	const [realm, setRealm] = useState("area52")
	const [userName, setUserName] = useState("yodafotm")

	const [isShown, setIsShown] = useState(true);
	const [animationClass, setAnimationClass] = useState(``)

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

	function unmountAnimationHandler() {
		setAnimationClass(`${style.formWrapperExit}`)
		setTimeout(() => {
			setIsShown(false)
		}, 250)
	}

	return (
		<>
			{isShown ?
				<div className={`${animationClass} h-1/2 w-1/2 bg-opacity-0 absolute self-center bg-cyan-100 flex flex-col items-center`}>
					<div
						className={
							`${style.formContainer} 
							font-dynapuff
							bg-paper
							bg-cover
							bg-center
							bg-no-repeat
							gap-7
							text-lg
							relative 
							w-96
							md:w-full
							lg:w-2/3 
							h-full 
							flex 
							flex-col 
							justify-center 
							items-center 
							border 
							border-red-100 
							shadow-lg 
							shadow-gray-300
							`}
					>
						<div
							className="absolute top-0 right-0 p-2 text-red-200"
							onClick={() => { unmountAnimationHandler() }}><IoClose size={"2em"} />
						</div>

						<label>
							Region:
							<select className={inputStyle}
								onChange={(e) => { handleSelectChange(e, setRegion) }} name="region" id="region">
								<option value="us">US</option>
								<option value="eu">EU</option>
								<option value="kr">KR</option>
								<option value="tw">TW</option>
							</select>
						</label>
						<label>Realm:
							<input value={realm} className={inputStyle}
								onChange={(e) => handleChange(e, setRealm)} />
						</label>
						<label>Character Name:
							<input value={userName} className={inputStyle}
								onChange={(e) => handleChange(e, setUserName)} />
						</label>
						<button className={buttonStyle}
							onClick={() => { unmountAnimationHandler(); sendDataHandler() }}>click me</button>
					</div>
				</div>
				:
				<div 
					className={`
						${style.formWrapperClosed} 
						self-center
						absolute
						left-0 
						flex 
						text-red-200
						`} 
					onClick={() => { setAnimationClass(`${style.formWrapperEntrance}`); setIsShown(!isShown) }}
					>
					<PiNotepadThin size={'5em'} />
				</div>
			}
		</>
	)
}
