import { vaultRewardsObject } from 'library/vaultrewardsobject';

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
			{level < 20 ?
			<div>level: {level} reward: {getRewardFromLevel(level)}</div> :
			<div>level: {level} reward: {getRewardFromLevel(20)}</div>
			}
		</>
	)
}
