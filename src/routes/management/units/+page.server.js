export const load = async ({ fetch }) => {
	const units = await fetch('/api/unit');
	return {
		units: await units.json()
	};
};
