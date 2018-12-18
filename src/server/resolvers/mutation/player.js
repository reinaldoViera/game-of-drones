export default {
    addPlayer(parent, { name }, { db }) {
        const data = db.Player.create({
            name
        });
        return data;
    }
}