import { normalize, schema } from "normalizr";

const course = new schema.Entity("courses");

const coursesNormalizer = (data) => normalize(data, [course]);

export { coursesNormalizer };
