export const load = async ({ fetch }) => {
	const users = await fetch('/api/user');
	return {
		users: await users.json()
	};
};
