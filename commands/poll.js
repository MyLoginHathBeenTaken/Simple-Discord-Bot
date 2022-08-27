const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Create poll with user options.')
		.addIntegerOption(option => option.setName('choices').setDescription('Poll Choices').setRequired(true)),
	async execute(interaction) {
		//create pool
		//create event timer to resolve poll



		
	},
};