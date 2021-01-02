import React from "react";

import HeaderPageComponent from './Header/Header';
import Main from './Main/Main';
import Footer from '../common/Footer/Footer';
import { IMovie } from '../../models/common/interfaces/Movie';
import { loadData } from '../../services/api/loadData';

import styles from './HomePage.module.scss';


export interface HomePageState {
  movies: IMovie[];
}

export class HomePage extends React.Component<unknown, HomePageState>   {
  state: HomePageState = {
    movies: []
  }

  componentDidMount(): void {
    this.setState({
      movies: loadData()
    }) 
  }

  render(): JSX.Element {
      return (
      <div className={styles['home-page']}>
        <HeaderPageComponent/>
        <Main className={styles.stretch} movies={this.state.movies}/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage