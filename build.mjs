import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import boxen from 'boxen';
// Pull in our modules
import chalk from 'chalk';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Joost van Dijk'),
	handle: chalk.white('joostd'),
	shorthandle: chalk.white('joostd'),
	work: chalk.white('Developer Advocate at Yubico'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('joostd'),
	mastodon: chalk.gray('https://mastodon.social/') + chalk.magenta('@joostd'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~joostd'),
	github: chalk.gray('https://github.com/') + chalk.green('joostd'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('joostd'),
	web: chalk.cyan('https://joostd.nl'),
	npx: `${chalk.red('npx')} ${chalk.white('joostd')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelTwitter: chalk.white.bold(' Twitter:'),
	labelMastodon: chalk.white.bold('Mastodon:'),
	labelnpm: chalk.white.bold('     npm:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline + // data.labelWork + data.work
	twittering +
	newline + // data.labelTwitter + data.twitter
	mastodoning +
	newline + // data.labelTwitter + data.twitter
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
