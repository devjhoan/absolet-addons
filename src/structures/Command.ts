import { ApplicationCommandOptionData, LocalizationMap } from "discord.js";
import { CommandType, RunOptions } from "../typings/Command";

export class Command {
	name: string;
	description: string;
	descriptionLocalizations?: LocalizationMap;
	run: (options: RunOptions) => unknown;
	options?: ApplicationCommandOptionData[];
	private directory?: string;
	private permission?: string;

	constructor(commandOptions: CommandType) {
		Object.assign(this, commandOptions);
	}
}