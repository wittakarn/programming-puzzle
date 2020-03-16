import { updateCellAdjacents, ServerInfo } from "./AdjacentManagement";

const serverNode: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
]

console.log("initial status");
console.log(serverNode);

let updatedServerNode: ServerInfo = updateCellAdjacents(serverNode, 0);

console.log("finish status");
console.log(updatedServerNode);