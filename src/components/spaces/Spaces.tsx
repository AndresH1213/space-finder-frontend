import { Component, ReactNode } from 'react';
import { Space } from '../../model/Model';
import { DataService } from '../../services/DataService';
import { Spacecomponent } from './SpaceComponent';
import { ConfirmModal } from './ConfirmModalComponent';
import { Link } from 'react-router-dom';

interface SpacesState {
  spaces: Space[];
  showModal: boolean;
  modalContent: string;
}

interface SpacesProps {
  dataService: DataService;
}

export class Spaces extends Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);
    this.state = {
      spaces: [],
      showModal: false,
      modalContent: '',
    };
    this.reserveSpace = this.reserveSpace.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces,
    });
  }

  private async reserveSpace(spaceId: string) {
    const reservationResult = await this.props.dataService.reserveSpace(
      spaceId
    );
    if (reservationResult) {
      this.setState({
        showModal: true,
        modalContent: `You reserved the space with id ${spaceId} and got the reservation number ${reservationResult}`,
      });
    } else {
      this.setState({
        showModal: true,
        modalContent: `You can't reserve ther space with id ${spaceId}`,
      });
    }
  }

  private renderSpaces() {
    const rows: any[] = [];
    for (const space of this.state.spaces) {
      rows.push(
        <Spacecomponent
          location={space.location}
          name={space.name}
          key={space.spaceId}
          photoURL={space.photoURL}
          spaceId={space.spaceId}
          reserveSpace={this.reserveSpace}
        />
      );
    }
    return rows;
  }

  private closeModal() {
    this.setState({ showModal: false, modalContent: '' });
  }

  render(): ReactNode {
    return (
      <div>
        <h2>Welcome to the space page!</h2>
        <Link to="/create-space">Create space</Link>
        <br />
        {this.renderSpaces()}
        <ConfirmModal
          close={this.closeModal}
          content={this.state.modalContent}
          show={this.state.showModal}
        />
      </div>
    );
  }
}
