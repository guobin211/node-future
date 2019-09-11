
function ChildrenItem(item) {
    this.id = Math.random() * 10 + 1;
    this.sort = item.children.length;
    this.parentId = item.id;
    this.children = [];
}

function Item(id) {
    this.id = id;
    this.sort = id;
    this.children = [];
}

const data = [];
for (let i = 0; i < 10; i++) {
    data.push(new Item(i))
}

const obj = data[1];

function upword(obj) {
    if (obj.sort !== 0) {
        const up = {...obj};
        up.sort = up.sort -1;
        const down = {...data[obj.sort - 1]};
        down.sort = down.sort + 1;

        data.splice(obj.sort - 1, 2, up, down);

        console.log(data);
    }
}

upword(obj);
