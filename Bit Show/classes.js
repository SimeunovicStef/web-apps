class Show {
    constructor(id, name, img) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
};


class Query {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};

export {
    Show,
    Query
}