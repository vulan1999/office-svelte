import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const users = await prisma.user.findMany({
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
		}
	});
	return json(users);
}
