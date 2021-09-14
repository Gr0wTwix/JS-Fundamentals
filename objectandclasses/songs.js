function solve(arr) {
    class songs {
        constructor(typelist,name,time) {
            this.typelist = typelist;
            this.name = name;
            this.time = time;
        }

    }

    let numberofsongs = arr.shift();
    let storesongs = [];
    let typesong = arr.pop();

    for (let i = 0; i < numberofsongs; i++) {
        let [type,name,time] = arr[i].split(`_`);
        let song = new songs(type,name,time);
        storesongs.push(song);
    }


    if (typesong === `all`) {
        storesongs.forEach((i) => console.log(i.name));
    } else {
        let filtered = storesongs.filter((i) => i.type === typesong);
        filtered.forEach((i) => console.log(i.name));
    }
    
}
solve([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);