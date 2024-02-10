import { PATHS, update, type Namespace, type Scripts } from '../lib/config';
import { getSources } from '../lib/sources';
import { relinkBins } from './bins';

export const desc = 'Add an additional directory to use as script source.';
export const usage = 'bunism link';


export async function addSourceDirectory(target?: string) {

	const sources = await getSources().catch(() => [] as (Namespace | Scripts)[]);
	let defaultSource = `${PATHS.bunism}/default`;

	if (sources.find(source => source.path === defaultSource)) {
		defaultSource = process.cwd();
	}

	if (!target) {
		const sourcePath = `Enter full path to source directory:\n${ansis.gray(
			`Leave empty to use: ${ansis.bold(defaultSource)}`
		)}\n> `;
		target = (await prompt(sourcePath)) || defaultSource;
	}

	const sourceDirectories = sources.map((source) => source.path);
	if (sourceDirectories.includes(target)) {
		console.log(`The path "${ansis.bold(target)}" already exists. Please choose another path.`);
		return await addSourceDirectory();
	}

	console.log(ansis.dim(`If you namespace this source, all your scripts within that dir will be prefixed with the namespace.`))
	console.log(ansis.dim(`For example, if you add a source with the namespace "foo", a script called "bar" will be available as "foo bar".`))
	console.log(ansis.dim(`If you don't want to namespace, just press enter and your scripts will be available globally.`))
	const namespace = prompt("Namespace (optional):") || undefined;

	target = path.resolve(target);
	sources.push({
		namespace,
		path: target,
		scripts: []
	});
	ensureDir(target)

	await update("sources", sources as Namespace[] | Scripts[]);
}

export default async function () {
	const sourceDir = argv._[0];
	if (sourceDir && !await Bun.file(sourceDir).exists() && ! await isDir(sourceDir)) {
		console.log(
			`The path you provided doesn't exist. Are you sure it's correct?`,
		);
		console.log(path.resolve(sourceDir));
		if (!(ack("\nContinue?"))) {
			return;
		}
	}
	await addSourceDirectory(sourceDir);

	// After a new directory is added, it might need to relink
	await relinkBins();
}