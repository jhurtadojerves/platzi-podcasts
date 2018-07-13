import slugify from "slugify"

const slug = name => slugify(name, {lower: true}).replace(/[^\w\-]+/g, '')

export default slug