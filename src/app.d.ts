// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			user:{
				nombres: string | null
				correo: string | null
				password: string | null
				token: string | null
				puntos: number | null
			}
			
		 }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};