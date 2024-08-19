import { checkSqlInjection } from "../../lib/utils";
import { z } from "zod";

export const NewMovieFormSchema = z.object({
	title: z
		.string({ required_error: "Please enter the title of the movie" })
		.refine(checkSqlInjection, {
			message: "SQL queries are not allowed :)",
		}),
	poster: z.any({ required_error: "poster picture is required" }).refine(
		(file: File) => {
			console.log(file);
			return file?.size !== 0;
		},
		{ message: "poster picture is required" }
	),
	year: z
		.number({ required_error: "Please enter the release year" })
		.int()
		.min(1800, "Release year must be greater than 1800")
		.max(
			new Date().getFullYear(),
			"Release year must be equal to or less than current year"
		),
	duration: z
		.number({ required_error: "Please enter the duration" })
		.nonnegative({ message: "duration must be greater than 0 minutes" })
		.int(),
	genre: z
		.array(
			z.object({
				category: z.string().refine(checkSqlInjection, {
					message: "SQL queries are not allowed :)",
				}),
			})
		)
		.optional(),
	rating: z
		.number()
		.min(0, { message: "rating must be equal to or greater than 0" })
		.max(10, { message: "rating must be less than or equal to 10" })
		.optional(),
	description: z.string().optional().refine(checkSqlInjection, {
		message: "SQL queries are not allowed :)",
	}),
	director: z
		.string({ required_error: "Please enter the director name" })
		.refine(checkSqlInjection, {
			message: "SQL queries are not allowed :)",
		}),
	cast: z.array(
		z.object({
			name: z.string().refine(checkSqlInjection, {
				message: "SQL queries are not allowed :)",
			}),
		})
	),
});

export type NewMovieFormSchemaType = z.infer<typeof NewMovieFormSchema>;
