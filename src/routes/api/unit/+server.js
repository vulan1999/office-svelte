import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const units = await prisma.unit.findMany({
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
	});

	return json(units);
};
