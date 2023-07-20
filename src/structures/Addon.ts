import { ClientEvents } from "discord.js";
import { Command } from "./Command";
import { Event } from "./Event";

interface AddonType {
	name: string;
	author: string;
	commands?: Command[];
	events?: Event<keyof ClientEvents>[];
	version: string;
}

class Addon {
	name: string;
	author: string;
	commands?: Command[];
	events?: Event<keyof ClientEvents>[];
	version: string;

	constructor(addon: AddonType) {
		this.name = addon.name;
		this.author = addon.author;
		this.version = addon.version;
		this.commands = addon?.commands || [];
		this.events = addon?.events || [];
	}
}

export default Addon;