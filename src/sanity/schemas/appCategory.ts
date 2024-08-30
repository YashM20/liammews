const appCategory = {
	name: "appCategory",
	title: "App Categories",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "tagname",
			title: "Tag Name",
			type: "string",
			options: {
				source: "tagname",
				unique: true,
				slugify: (input: any) => {
					return input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "");
				},
			},
			validation: (Rule: any) =>
				Rule.custom((fields: any) => {
					if (
						fields !== fields.toLowerCase() ||
						fields.split(" ").includes("")
					) {
						return "Tags must be lowercase and not be included space";
					}
					return true;
				}),
		}
	],
};
export default appCategory;