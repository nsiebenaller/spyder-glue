import { writeFileSync } from "fs";
import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { projectSchema } from "@/types/project";

const projectsSchema = z.object({
  $schema: z.string().optional(),
  projects: z.array(projectSchema),
});

writeFileSync(
  "./data/projects.d.json",
  JSON.stringify(zodToJsonSchema(projectsSchema), null, 2),
);
