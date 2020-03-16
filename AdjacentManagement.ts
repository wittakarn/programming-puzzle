export interface ServerInfo {
    serverNode: number[][];
    updateCount: number;
}

interface Position {
    x: number;
    y: number;
}

export function updateCellAdjacents(serverNode: number[][], updateCount: number): ServerInfo {
    updateCount = updateCount + 1;
    let needUpdate = false;
    let updatedServerNode = [
        ...serverNode,
    ];

    for (let y = 0; y < updatedServerNode.length; y++) {
        for (let x = 0; x < updatedServerNode[y].length; x++) {
            if (updatedServerNode[y][x] === 1) {
                updatedServerNode = updateCellAdjacent(updatedServerNode, { x, y });
            }
        }
    }

    for (let y = 0; y < updatedServerNode.length; y++) {
        for (let x = 0; x < updatedServerNode[y].length; x++) {
            if (!needUpdate && updatedServerNode[y][x] === 0) {
                needUpdate = true;
            }
            if (updatedServerNode[y][x] === 0.5) {
                updatedServerNode[y][x] = 1;
            }
        }
    }

    if (needUpdate) {
        return updateCellAdjacents(updatedServerNode, updateCount);
    }

    return {
        updateCount,
        serverNode: updatedServerNode,
    };
}

export function updateCellAdjacent(serverNode: number[][], position: Position) {
    let updatedServerNode = [
        ...serverNode
    ];
    const topPosition = position.y - 1;
    const leftPosition = position.x - 1;
    const bottomPosition = position.y + 1;
    const rightPosition = position.x + 1;
    updatedServerNode = updateCell(updatedServerNode, { ...position, y: topPosition, }); // top cell
    updatedServerNode = updateCell(updatedServerNode, { ...position, x: leftPosition, }); // left cell
    updatedServerNode = updateCell(updatedServerNode, { ...position, y: bottomPosition, }) // bottom cell
    updatedServerNode = updateCell(updatedServerNode, { ...position, x: rightPosition, }) // right cell

    return updatedServerNode;
}

export function updateCell(serverNode: number[][], position: Position) {
    const updatedServerNode = [
        ...serverNode
    ];
    if (
        position.y > -1
        && position.x > -1
        && position.y < serverNode.length
        && position.x < serverNode[0].length
    ) {
        if (updatedServerNode[position.y][position.x] === 0) {
            updatedServerNode[position.y][position.x] = 0.5;
        }
    }
    return updatedServerNode;
}
