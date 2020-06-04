const users = [];

const addUser = ({ id, name, room }) => {
  name = name
  room = room

  // if(!name || !room) return { error: 'Error entering chat. Please try again.' };
  if(!name && !room) return { error: 'both' };
  else if(!room) return { error: 'Room'}
  else if (!name) return { error : 'Name'}

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };