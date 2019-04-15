import * as React from  "react";

import {Piece, PieceType} from "./Piece";

export interface BoardProps { compiler: string; framework: string;}

export interface TileProps { row: number; column: number;}

export interface BoardState {
    flip: boolean;
    Board: [any][any]; // [row][column]
}

/*
=== Array                       === Chess notation

0_____black______               8_____black______
1________________               7________________
2________________               6________________
    ........                         ........
6________________               2
7_____white _____               1_____white ____
 0 1 2 3 4 5 6 7                 a b c d e f g h

*/


// const divStyle={
//     front: '6px',
// };
// export const Hello = (props: HelloProps) => 
// <div>
//     <div style={divStyle} className="board">asdasd</div>
// </div>



export class Board extends React.Component<BoardProps, BoardState>{
    constructor(props: any) {
        super(props);
        this.state = { Board: [
            this.initPieces("black", false),
            this.initPieces("black", true),
            [{}],
            [{}],
            [{}],
            [{}],
            this.initPieces("white", true),
            this.initPieces("black", false),
        ],
        flip: false };
      }
    
      initPieces(color:string, pawns:boolean) : [Object] {

        var obj: [object];
    
        if (pawns) {
            for (let i = 0; i<8; i++) {
                var uh = {type: PieceType.PAWN, color: color, captured: false};
                obj.push(uh);
            }
            return obj;
        }
    
        obj.push({type:PieceType.ROOK, color: color, captured: false});
        obj.push({type:PieceType.KNIGHT, color: color, captured: false});
        obj.push({type:PieceType.BISHOP, color: color, captured: false});
        obj.push({type:PieceType.KING, color: color, captured: false});
        obj.push({type:PieceType.QUEEN, color: color, captured: false});
        obj.push({type:PieceType.BISHOP, color: color, captured: false});
        obj.push({type:PieceType.KNIGHT, color: color, captured: false});
        obj.push({type:PieceType.ROOK, color: color, captured: false});
    
        return obj;
    }

    render(){
        const divStyle={
            fontSize: '60px',
        };
        const block={
            display: 'inline-block',
            // border:'solid',
            padding:'17px',
        };
        const block1={
            display: 'inline-block',
            // border:'solid',
            padding:'17px',
            'background-color': 'red',
        };

        var rows: any;
        rows = [8,7,6,5,4,3,2,1];
        
        var columns: any;
        columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

        var chessColumns: any;
        chessColumns = columns.map((column: any) =>
        <div className="tile">{column}</div>
      );

        var chessRows: any;
        chessRows = rows.map((row: any) =>
        <div className="row">{chessColumns}</div>
      );



        return(
        <div className="board">
            {
           chessRows
            }
        </div>
        );
    }
}