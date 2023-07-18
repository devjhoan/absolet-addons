/* eslint-disable @typescript-eslint/no-explicit-any */
// Vamos a declarar una clase Addon, la cual va a recibir en el constructor un objecto con los siguientes datos:
import { Command } from "./Command";
import { Event } from "./Event";

interface AddonType {
	name: string;
	author: string;
	commands: Command[];
	events: Event<any>[];
	version: string;
}

class Addon {
	name: string;
	author: string;
	commands: Command[];
	events: Event<any>[];
	version: string;

	constructor(addon: AddonType) {
		this.name = addon.name;
		this.author = addon.author;
		this.commands = addon.commands;
		this.events = addon.events;
		this.version = addon.version;
	}
}

export default Addon;