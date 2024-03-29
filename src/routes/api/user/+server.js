import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const pageNumber = Number(url.searchParams.get('page') ?? '1');
	const users = await prisma.user.findMany({
		take: 10,
		skip: 10 * pageNumber,
		select: {
			id: true,
			name: true,
			email: true,
			manager: {
				select: {
					id: true,
					name: true,
					email: true
				}
			},
			unit: {
				select: {
					id: true,
					name: true
				}
			}
		},
		orderBy: {
			email: 'asc'
		}
	});
	return json(users);
};
