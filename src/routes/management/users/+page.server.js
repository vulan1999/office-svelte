export const load = async ({ fetch, url }) => {
	const pageNumber = url.searchParams.get('page') ?? '1';
	const users = await fetch(`/api/user?page=${pageNumber}`);
	return {
		users: await users.json()
	};
};
