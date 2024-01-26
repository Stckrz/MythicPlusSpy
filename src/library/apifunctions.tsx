//this function takes the region, realm, and username of a character, and returns an array of the highest, 4th highest, and 8th highest completed key levels.
export async function fetchMythicRuns(region: string, realm: string, userName: string) {

	try {
		let levelArray: number[] = []
		const response = await fetch(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${userName}&fields=mythic_plus_weekly_highest_level_runs`)
		const fetchedData = await response.json();
		fetchedData.mythic_plus_weekly_highest_level_runs?.map((item: any) => {
			item !== undefined &&
				levelArray.push(item.mythic_level);
		})
		if (levelArray.length > 0) {
			return [levelArray[0], levelArray[3], levelArray[7]]
		}
		else {
			return ([])
		}
	} catch (error) { console.log(error) }
}
