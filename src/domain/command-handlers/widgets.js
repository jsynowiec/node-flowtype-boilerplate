let widgets = [];

module.exports = {
    getAllWidgets: (cmd) => {
        return widgets;
    },
    getOneWidget: (cmd) => {
        return widgets.filter((w) => w.id === cmd.id);
    },
    removeWidet: (cmd) => {
        widgets = widgets.filter((w) => w.id !== cmd.id);
        return {};
    },
    createWidget: (cmd) => {
        widgets.push({ id: widgets.length + 1, name: cmd.name, size: cmd.size});
        return {};
    },
    modifyWidget: (cmd) => {
        widgets = widgets.map((w) => {
            if(w.id===cmd.id){
                w.size = cmd.size;
            }
            return w;
        });
        return {};
    }
}
