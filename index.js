import { Client, Events, GatewayIntentBits } from 'discord.js';

const TOKEN = process.env.TOKEN;

const phrases = [
  `{name}'s balls have been twisted tighter than a coon's tail on a hot summer day, bless their heart.`,
  `Well shoot, {name}'s balls just got twisted six ways to Sunday, y'all!`,
  `Lord have mercy, {name}'s balls are more twisted than a country road through the holler.`,
  `Ain't that somethin' — {name}'s balls got twisted real good, I tell ya what.`,
  `Sweet baby Jesus, {name}'s balls just got twisted up worse than granddaddy's old garden hose.`,
  `Well I'll be a monkey's uncle, {name}'s balls are twisted somethin' fierce!`,
  `Hotter than a goat's butt in a pepper patch — {name}'s balls just got twisted!`,
  `{name}'s balls got twisted so bad even the hound dog felt it, y'all.`,
  `Slicker than a greased pig at the county fair — {name}'s balls just got twisted, darlin'.`,
  `Well butter my biscuit, {name}'s balls are twisted up tighter than a tick on a bluetick hound.`,
  `{name}'s balls got twisted harder than a tornado through a trailer park, bless 'em.`,
  `Jumpin' jehosaphat, {name}'s balls just got twisted like mama's wash on the line!`,
  `Hoo-wee, {name}'s balls are more twisted than a rattlesnake in a burlap sack!`,
  `Well dog my cats, {name}'s balls just got twisted up real good, sugar.`,
  `{name}'s balls are twisted tighter than a jar lid at a church potluck, I reckon.`,
  `Lawdy lawdy, {name}'s balls just got twisted worse than a summer storm comin' over the ridge.`,
  `Finer than frog hair split four ways — {name}'s balls just got twisted, hon.`,
  `Well I swan, {name}'s balls got twisted up like a mess of kudzu vine, bless their heart.`,
  `{name}'s balls just got twisted harder than churnin' butter on a July afternoon.`,
  `Knee-high to a grasshopper and already gettin' twisted — {name}'s balls, y'all!`,
  `Well shut my mouth, {name}'s balls are twisted up tighter than a new pair of Sunday shoes.`,
  `{name}'s balls got twisted so hard the cows came home early, I tell ya.`,
  `Colder than a well-digger's belt buckle — {name}'s balls just got twisted, sugarpie.`,
  `{name}'s balls are twisted worse than a politician's promise at election time, y'all.`,
  `Well dip me in honey and throw me to the flies — {name}'s balls just got twisted good!`,
];

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`Bot is online as ${client.user.tag}! Yeehaw!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'twistballs') {
    const name = interaction.options.getString('name');
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    const response = random.replace('{name}', name);
    await interaction.reply(response);
  }
});

client.login(TOKEN);
