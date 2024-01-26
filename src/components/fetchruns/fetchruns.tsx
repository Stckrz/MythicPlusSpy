import React from 'react';
import { ChestReward } from 'components/chestreward/chestreward';

interface FetchRunsProps {
	data: number[];
}

export const RewardDisplay: React.FC<FetchRunsProps> = ({ data }) => {

	return (
		<>
			{
				data.length !== 0 ?

				data.map((item) => {
					return (
						<div>
							<ChestReward level={item} />
						</div>
					)
				})
				:<div>No data found</div>
			}
		</>
	)
}
