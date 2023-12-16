import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const GET = async ({ params: { id } }) => {
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id)
		},
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
					name: true,
					parentUnit: {
						select: {
							id: true,
							name: true
						}
					}
				}
			},
			members: true
		}
	});
	return json(user);
};
