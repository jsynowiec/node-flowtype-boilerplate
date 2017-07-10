let encounters = [];

module.exports = {
    getAllEncounters: (cmd) => {
        return encounters;
    },
    getOneEncounter: (cmd) => {
        return encounters.filter((w) => w.id === cmd.id);
    },
    removeEncounter: (cmd) => {
        encounters = encounters.filter((w) => w.id !== cmd.id);
        return {};
    },
    createEncounter: (cmd) => {
        encounters.push({ id: encounters.length + 1, name: cmd.name, size: cmd.size});
        return {};
    },
    modifyEncounter: (cmd) => {
        encounters = encounters.map((w) => {
            if(w.id===cmd.id){
                w.size = cmd.size;
            }
            return w;
        });
        return {};
    }
}
