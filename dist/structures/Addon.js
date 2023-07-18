"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Addon {
    constructor(addon) {
        this.name = addon.name;
        this.author = addon.author;
        this.commands = addon.commands;
        this.events = addon.events;
        this.version = addon.version;
    }
}
exports.default = Addon;
