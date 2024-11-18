import { sqliteTable, AnySQLiteColumn, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuarios = sqliteTable("usuarios", {
	id: integer("id").primaryKey(),
	nombre: text("nombre").notNull(),
	correo: text("correo").notNull(),
	password: text("password").notNull(),
	token: text("token"),
});

export const actividades = sqliteTable("actividades", {
	id: integer("id").primaryKey(),
	correo: text("correo").notNull(),
	puntos: integer("puntos").notNull(),
});