import { Component, ReactNode } from 'react';
import genericImage from '../../assets/generic-image.jpg';
import './SpaceComponent.css';

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoURL?: string;
  reserveSpace: (spaceId: string) => void;
}

export class Spacecomponent extends Component<SpaceComponentProps> {
  private renderImage() {
    return this.props.photoURL ? (
      <img src={this.props.photoURL} alt="" />
    ) : (
      <img src={genericImage} alt="" />
    );
  }
  render(): ReactNode {
    return (
      <div className="spaceComponent">
        {this.renderImage()}
        <label className="name">{this.props.name}</label>
        <br />
        <label className="spaceId">{this.props.spaceId}</label>
        <br />
        <label className="location">{this.props.location}</label>
        <br />
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>
          Reserve
        </button>
      </div>
    );
  }
}
