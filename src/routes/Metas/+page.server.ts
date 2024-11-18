import type { Actions } from './$types';
import { db } from '$lib/server/database/connect';
import { actividades } from '$lib/server/database/data';

export const actions: Actions = {
  submitActivities: async ({ request, locals }) => {
    if (!locals.user) {
      return { status: 401, body: { message: 'Usuario no autenticado' } };
    }

    const formData = await request.formData();
    const totalPoints = parseInt(formData.get('totalPoints')?.toString() || '0');
    const userEmail = locals.user.correo;

    try {
      // Inserta o actualiza la información de actividades en la tabla `actividades`
      await db
        .insert(actividades)
        .values({ correo: userEmail as string, puntos: totalPoints })
    
      console.log("Puntos guardados con éxito para", userEmail);
      return { status: 200, body: { message: 'Puntos guardados con éxito' } };
    } catch (error) {
      console.error('Error al guardar puntos:', error);
      return { status: 500, body: { message: 'Error al guardar puntos' } };
    }
    
  }
};
