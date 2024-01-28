import { search } from "../sources";

export const info = {
	desc: `Remove and unlink a script`,
	usage: `bunshell remove <script-name>`,
	alias: ["rm"],
};

export async function run() {
	const slug = argv._[0];

	if (!slug) {
		throw new Error(
			`You must specify which script to remove.\n${info.usage}`,
		);
	}

	const { file, bin } = await search(slug);

	if (!file && !bin) {
		console.log(`🍀 You're in luck! ${slug} doesn't exist already!`);
		return;
	}

	if (false === (ack(`Delete command "${chalk.bold(slug)}"?`))) {
		return false;
	}

	await $`rm ${file}`;
	await $`rm ${bin}`;
}