import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	const { name, email, unit, manager } = await request.json();
	const createdUser = await prisma.user.create({
		data: {
			name,
			email,
			unit,
			manager
		}
	});
	return json(createdUser);
};
