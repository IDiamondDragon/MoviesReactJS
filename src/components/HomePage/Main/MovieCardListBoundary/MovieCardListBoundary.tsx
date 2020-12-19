import React from "react";
import movies from "../../../../assets/data/movies.json"

export class MovieCardListBoundary extends React.Component {

  constructor(props: any) {
    super(props);
  }
  

  render(): React.ReactNode | null | undefined {
    if (movies.length === 0) {
      return (
        <div style={{fontSize: '30px', textAlign: 'center', marginTop: '100px', color: '#FFFFFF'}}>
          No Movie Found
        </div>
      );
    }

    return this.props.children;
  }  
}

export default MovieCardListBoundary
