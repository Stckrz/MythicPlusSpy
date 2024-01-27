import { vaultRewardsObject } from 'library/vaultrewardsobject';
import { GiLockedChest } from 'react-icons/gi'

interface ChestRewardProps {
	level: number
}

export const ChestReward: React.FC<ChestRewardProps> = ({ level }) => {

	function getRewardFromLevel(level: number) {
		let reward = vaultRewardsObject.find(item => item?.level === level)!.reward
		return (reward)
	}

	return (
		<>
			<div className="flex flex-col justify-center items-center text-red-200 md:w-52 md:h-52 lg:text-lg space-x-5
				">
				{level !== undefined ?
					<div>
						<div className="rounded-full h-11 w-14 md:w-20 lg:h-44 lg:w-44 flex items-center justify-center lg:text-5xl">
							<GiLockedChest size={"5em"} />
						</div>
						<div className="flex justify-center items-center md:p-2 md:text-xl lg:text-2xl">
							level: {level}
						</div>
						<div className="justify-center flex md:text-xl lg:text-2xl">
							reward: {level < 20 ? getRewardFromLevel(level) : getRewardFromLevel(20)}
						</div>
					</div> :
					<div>
						<div className="
							text-red-100 rounded-full h-11 w-14 md:w-20 lg:h-44 lg:w-44 flex items-center justify-center lg:text-5xl">
							<GiLockedChest size={"5em"} />
						</div>
						<div className="flex justify-center items-center md:p-2 md:text-xl lg:text-2xl">
							level: --
						</div>
						<div className="justify-center flex md:text-xl lg:text-2xl">
							reward: --
						</div>
					</div>
				}
			</div>
		</>
	)
}
