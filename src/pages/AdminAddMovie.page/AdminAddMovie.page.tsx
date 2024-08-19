import { useForm } from "react-hook-form";
import ImageSelector from "../../components/ImageSelector";
import MovieCard from "../../features/MovieFeed/components/MovieCard";
import {
	NewMovieFormSchema,
	NewMovieFormSchemaType,
} from "../../features/AdminAddNewMovie/AdminAddNewMovie.form";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AdminAddMovie() {
	const form = useForm<NewMovieFormSchemaType>({
		resolver: zodResolver(NewMovieFormSchema),
		defaultValues: {},
	});
	const [cast, setCast] = useState<string>();

	useEffect(() => {
		console.log(form.getValues());
	}, [form]);

	useEffect(() => {
		const { cast } = form.getValues();
		const castStr = cast?.reduce(
			(accumulator, currentValue) =>
				accumulator + ", " + currentValue.name,
			""
		);
		setCast(castStr);
	}, [form.getValues()]);

	const onSubmit = (data: NewMovieFormSchemaType) => {
		console.log("on submit", data);
	};

	return (
		<>
			<section className="mb-4">
				<h2>Preview</h2>
				<MovieCard Cast={cast} />
			</section>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4"
				>
					<FormField
						control={form.control}
						name={"title"}
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel>Title</FormLabel> */}
								<FormControl>
									<Input
										placeholder="title"
										type="number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"description"}
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel>Title</FormLabel> */}
								<FormControl>
									<Input
										placeholder="description"
										type="number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"poster"}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Poster image</FormLabel>
								<FormControl>
									<ImageSelector onChange={field.onChange} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* <Controller
						name="poster"
						control={form.control}
						rules={{
							required:
								"لطفا تصویری از فروشگاه خود را بارگزاری نمایید",
						}}
						render={({ field }) => (
							<ImageSelector onChange={field.onChange} />
						)}
					/> */}
					<Button
						type="submit"
						variant={"primary"}
						className="flex-1"
					>
						Save
					</Button>
				</form>
			</Form>
		</>
	);
}
