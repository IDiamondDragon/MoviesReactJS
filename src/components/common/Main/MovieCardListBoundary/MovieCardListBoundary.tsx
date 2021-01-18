import React from "react";
import { connect } from 'react-redux';
import { RootState } from '../../../../store/store';
import { IMovie } from '../../../../models/common/interfaces/IMovie';

function mapStateToProps(state: RootState): StateProps {
  const movies = state.movies.movies
  return { movies }
}

interface StateProps {
  movies?: IMovie[];
}

export interface OwnProps {
  children?: React.ReactNode;
}

type Props = StateProps & OwnProps

export class MovieCardListBoundary extends React.Component<Props, unknown> {

  constructor(public props: Props) {
    super(props);
  }

  render(): React.ReactNode | null | undefined {
    if (this.props?.movies?.length === 0) {
      return (
        <div style={{fontSize: '30px', textAlign: 'center', marginTop: '100px', color: '#FFFFFF'}}>
          No Movie Found
        </div>
      );
    }

    return this.props.children;
  }  
}


export default connect<Props, unknown, OwnProps, RootState>
 (mapStateToProps)
 (MovieCardListBoundary)

