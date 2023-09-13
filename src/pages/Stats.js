import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const testData = [
	{
		date: 20230901,
		completedNum: 8,
		completedPercent: 80,
	},
	{
		date: 20230902,
		completedNum: 4,
		completedPercent: 40,
	},
	{
		date: 20230903,
		completedNum: 10,
		completedPercent: 100,
	},
	{
		date: 20230904,
		completedNum: 10,
		completedPercent: 100,
	},
];

export default function Stats() {
	return (
		<VictoryChart
			theme={V.VictoryTheme.material}
			domainPadding={20}
			width={400}
			height={200}
			domain={{ y: [0, 100] }}
		>
			<VictoryAxis
				tickValues={[20230901, 20230902, 20230903, 20230904]}
				tickFormat={["9/1", "9/2", "9/3", "9/4"]}
			/>
			<VictoryAxis
				dependentAxis
				tickFormat={(x) => `${x}%`}
				animate={{ duration: 1000, easing: "bounce" }}
			/>
			<VictoryBar data={testData} x="date" y="completedPercent" />
		</VictoryChart>
	);
}
