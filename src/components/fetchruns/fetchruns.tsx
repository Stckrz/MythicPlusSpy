import React from 'react';
import { ChestReward } from 'components/chestreward/chestreward';

interface FetchRunsProps {
	data: number[];
}

export const RewardDisplay: React.FC<FetchRunsProps> = ({ data }) => {

	return (
		<>
			<div className="flex lg:space-x-32 items-center justify-center h-96 lg:w-lvw">
				{
					data.length !== 0 ?
						data.map((item) => {
							return (
								<ChestReward level={item} />
							)
						})
						: <div style={{ fontFamily: 'dynapuff' }} className={`text-red-100 text-4xl`}>
							No data found :(
						</div>
				}
			</div>
		</>
	)
}
