export const load = async ({ fetch, params: { slug } }) => {
	const userInfo = await fetch(`/api/user/${slug}`);
	const unitList = await fetch('/api/unit');

	return {
		user: await userInfo.json(),
		units: await unitList.json()
	};
};
