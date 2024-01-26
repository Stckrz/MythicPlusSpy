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
			<div className="flex-col justify-center align-middle text-red-200 text-lg">
				<div className="rounded-full h-44 w-44 flex items-center justify-center">
					<GiLockedChest size={"9em"} />
				</div>
				<div className="justify-center flex">
					level: {level}
				</div>
				<div className="justify-center flex">
					reward: {level < 20 ? getRewardFromLevel(level) : getRewardFromLevel(20)}
				</div>
			</div>
		</>
	)
}
