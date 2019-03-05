import * as React from  "react";

export enum PieceType {
  PAWN= "PAWN",
  ROOK="ROOK",
  KNIGHT="KNIGHT",
  BISHOP="BISHOP",
  QUEEN="QUEEN",
  KING="KING"
}

export interface PieceProps {
  type: PieceType;
  color: string;
}

export interface PieceState {
  captured: boolean;
  // isEditing?: boolean
  // to make optional
}

/* the equivalent of
* export const Hello = (props: HelloProps, state: HelloState, whateverproperty: InsertInterfaceHere) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
*/
export class Piece extends React.Component<PieceProps, PieceState> {
  constructor(props: any) {
    super(props);
    this.state = {captured: false};
  }

  name() {
    let enumString = PieceType[this.props.type];
    return enumString;
  }

  capture(arg: boolean) {
    this.setState({captured: arg});
  }

  render() {
    return (
    <div className={this.state.captured ? "captured" : ""}>
      {this.props.color + " " + this.name}
    </div>
    //<div>{this.props.type}</div>
    );
  }
}