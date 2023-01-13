const { SlashCommandBuilder } = require('discord.js');

var cache = require('persistent-cache');
var cats = cache({
    base: 'data/poll',
    name: 'polls'
});
module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Manage polls.')
		//options 1) resolve or create poll 2) poll name 3) poll body 4) # of choices
		.addIntegerOption(option => option.setName('choices').setDescription('Poll Choices').setRequired(true)),
	async execute(interaction) {
		//create pool
		//post to poll channel and return poll mId and pass to cats
		cats.put(pollName, {pollBody: pollBody, pollChoices: pollChoices, pollId: pollId}, 
			function(err) { if (err) {
				return interaction.reply('error:' + err);
			}else{
				return interaction.reply('done!');
			}} )
		//resolve poll
			



		
	},
};