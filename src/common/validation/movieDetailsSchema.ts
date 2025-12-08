import { z } from "zod";

export const MovieDetailsSchema = z.object({
    id: z.number(),
    title: z.string(),
    overview: z.string().nullable(),
    runtime: z.number().nullable(),
    vote_average: z.number(),
    release_date: z.string(),

    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),

    genres: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
        })
    ),
});
