import React from 'react';
import { ChestReward } from 'components/chestreward/chestreward';

interface FetchRunsProps {
	data: number[];
}

export const RewardDisplay: React.FC<FetchRunsProps> = ({ data }) => {

	return (
		<>
			<div className="flex space-x-32 items-center justify-center h-60 w-lvw">
			{
				data.length !== 0 ?
				data.map((item) => {
					return (
							<ChestReward level={item} />
					)
				})
				:<div>No data found</div>
			}
			</div>
		</>
	)
}
