import * as React from  "react";

import {Piece, PieceType} from "./Piece";

export interface BoardProps { compiler: string; framework: string;}

export interface BoardState {
    flip: boolean;
    Board: [][]; // [row][column]
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
        return(
        <div>
            <div style={divStyle} className="board">hello</div>
            
            {/* <div>
                <div>
                    <div style={block}>01</div>
                    <div style={block1}>02</div>
                    <div style={block}>03</div>
                    <div style={block1}>04</div>
                    <div style={block}>05</div>
                    <div style={block1}>06</div>
                    <div style={block}>07</div>
                    <div style={block1}>08</div>
                </div>
                <div>
                    <div style={block1}>11</div>
                    <div style={block}>12</div>
                    <div style={block1}>13</div>
                    <div style={block}>14</div>
                    <div style={block1}>15</div>
                    <div style={block}>16</div>
                    <div style={block1}>17</div>
                    <div style={block}>18</div>
                </div>
                <div>
                    <div style={block}>21</div>
                    <div style={block1}>22</div>
                    <div style={block}>23</div>
                    <div style={block1}>24</div>
                    <div style={block}>25</div>
                    <div style={block1}>26</div>
                    <div style={block}>27</div>
                    <div style={block1}>28</div>
                </div>
                <div>
                    <div style={block1}>31</div>
                    <div style={block}>32</div>
                    <div style={block1}>33</div>
                    <div style={block}>34</div>
                    <div style={block1}>35</div>
                    <div style={block}>36</div>
                    <div style={block1}>37</div>
                    <div style={block}>38</div>
                </div>
                <div>
                    <div style={block}>41</div>
                    <div style={block1}>42</div>
                    <div style={block}>43</div>
                    <div style={block1}>44</div>
                    <div style={block}>45</div>
                    <div style={block1}>46</div>
                    <div style={block}>47</div>
                    <div style={block1}>48</div>
                </div>
                <div>
                    <div style={block1}>51</div>
                    <div style={block}>52</div>
                    <div style={block1}>53</div>
                    <div style={block}>54</div>
                    <div style={block1}>55</div>
                    <div style={block}>56</div>
                    <div style={block1}>7</div>
                    <div style={block}>8</div>
                </div>
                <div>
                    <div style={block}>1</div>
                    <div style={block1}>2</div>
                    <div style={block}>3</div>
                    <div style={block1}>4</div>
                    <div style={block}>5</div>
                    <div style={block1}>6</div>
                    <div style={block}>7</div>
                    <div style={block1}>8</div>
                </div>
                <div>
                    <div style={block1}>1</div>
                    <div style={block}>2</div>
                    <div style={block1}>3</div>
                    <div style={block}>4</div>
                    <div style={block1}>5</div>
                    <div style={block}>6</div>
                    <div style={block1}>7</div>
                    <div style={block}>8</div>
                </div> */}
                
        
            
            </div>

            {/* <Piece type={PieceType.KING} color="white"/> */}
        </div>
        );
    }
}