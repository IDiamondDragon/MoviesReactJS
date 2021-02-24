import React from 'react';
import { render } from '@testing-library/react';
import AddEditMovie from './AddEditMovie';
import { AddEditMovieProps } from './AddEditMovie';
import { intialValueMovie } from '../../../../services/data/initialValueMovie';
import { IMovie } from '../../../../models/common/interfaces/IMovie';
import userEvent from '@testing-library/user-event'
import selectEvent from "react-select-event";
import { act } from 'react-dom/test-utils';

function renderAddEditMovieForm(props: Partial<AddEditMovieProps> = {}) {
  const defaultProps: AddEditMovieProps = {
    movie: intialValueMovie(),
    onClickCloseButton(e: React.MouseEvent): void {
      return;
    },
    onSubmit(movie: IMovie): void {
      return;
    },
    className: ''
  }

  return render(<AddEditMovie {...defaultProps} {...props} />)
}


describe('<AddEditMovie />', () => {

test("should display add movie form with intial values", async () => {
    const formInitialValueMovie = intialValueMovie();
    const { findByTestId } = renderAddEditMovieForm();

    const addEditForm = await findByTestId("add-edit-movie-form");

    expect(addEditForm).toHaveFormValues({
      title: formInitialValueMovie.title,
      releaseDate: formInitialValueMovie.releaseDate,
      posterPath: formInitialValueMovie.posterPath,
      genres: formInitialValueMovie.genres.toString(),
      overview: formInitialValueMovie.overview,
      runtime: formInitialValueMovie.runtime.toString(),
    });

  });

test("should display edit movie form with values for a movie", async () => {
    const movie: IMovie =   {
      id: 337167,
      title: "Fifty Shades Freed",
      tagline: "Don't miss the climax",
      voteAverage: 6.1,
      voteCount: 1195,
      releaseDate: "2018-02-07",
      posterPath: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      budget: 55000000,
      revenue: 136906000,
      genres: [
          "Drama",
          "Romance"
      ],
      runtime: 106
    };

    const { findByTestId } = renderAddEditMovieForm({ movie });

    const addEditForm = await findByTestId("add-edit-movie-form");

    expect(addEditForm).toHaveFormValues({
      title: movie.title,
      releaseDate: movie.releaseDate,
      posterPath: movie.posterPath,
      genres: movie.genres,
      overview: movie.overview,
      runtime: movie.runtime.toString(),
    });
  });

  test("should allow entering a title", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const title = await findByTestId("title") as HTMLInputElement;

    userEvent.clear(title);
    userEvent.type(title, 'Test', {});

    expect(title.value).toEqual("Test");
  });

  test("should allow entering a date", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const releaseDate = await findByTestId("releaseDate") as HTMLInputElement;

    userEvent.clear(releaseDate);
    userEvent.type(releaseDate, '2000-10-10', {});

    expect(releaseDate.value).toEqual("2000-10-10");
  });

  test("should allow entering a posterPath", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const posterPath = await findByTestId("posterPath") as HTMLInputElement;

    userEvent.clear(posterPath);
    userEvent.type(posterPath, 'Test', {});

    expect(posterPath.value).toEqual("Test");
  });

  test("should allow entering a overview", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const overview = await findByTestId("overview") as HTMLInputElement;

    userEvent.clear(overview);
    userEvent.type(overview, 'Test', {});

    expect(overview.value).toEqual("Test");
  });

  test("should allow entering a runtime", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const runtime = await findByTestId("runtime") as HTMLInputElement;

    userEvent.clear(runtime);
    userEvent.type(runtime, "1", {});

    expect(runtime.value).toEqual("1");
  });

  test("should allow entering a runtime", async () => {
    const { findByTestId } = renderAddEditMovieForm();

    const runtime = await findByTestId("runtime") as HTMLInputElement;

    userEvent.clear(runtime);
    userEvent.type(runtime, "1", {});

    expect(runtime.value).toEqual("1");
  });
  
  test("should allow select value for a select", async () => {
      const { container, getByDisplayValue } = renderAddEditMovieForm();

      const select: HTMLElement = container.getElementsByClassName("react-multi-select-container")[0] as HTMLElement;
      await selectEvent.select(select, ["Adventure"]);

      const inputAventure = getByDisplayValue("Adventure");

      expect(inputAventure).toBeInTheDocument();
  });

    
  test("should sumbit the form", async () => {
      const onSubmit = jest.fn();
      const { findByTestId, container } = renderAddEditMovieForm({onSubmit});

      const select: HTMLElement = container.getElementsByClassName("react-multi-select-container")[0] as HTMLElement;
      await selectEvent.select(select, ["Adventure"]);

      const runtime = await findByTestId("runtime") as HTMLInputElement;
      userEvent.clear(runtime);
      userEvent.type(runtime, "1", {});
 
      const overview = await findByTestId("overview") as HTMLInputElement;
      userEvent.clear(overview);
      userEvent.type(overview, 'Test', {});

      const posterPath = await findByTestId("posterPath") as HTMLInputElement;
      userEvent.clear(posterPath);
      userEvent.type(posterPath, 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg', {});

      const releaseDate = await findByTestId("releaseDate") as HTMLInputElement;
      userEvent.clear(releaseDate);
      userEvent.type(releaseDate, '2000-10-10', {});

      const title = await findByTestId("title") as HTMLInputElement;
      userEvent.clear(title);
      userEvent.type(title, 'Test', {});

      const submit = await findByTestId("submit");

      await act( async () => {
        userEvent.click(submit);
      });

      expect(onSubmit).toHaveBeenCalled();
    });

    test("should close the form", async () => {
        const onClickCloseButton = jest.fn();
        const { findByTestId, container } = renderAddEditMovieForm({onClickCloseButton});

        const select: HTMLElement = container.getElementsByClassName("react-multi-select-container")[0] as HTMLElement;
        await selectEvent.select(select, ["Adventure"]);

        const closeButton = await findByTestId("close");
        
        userEvent.click(closeButton);

        expect(onClickCloseButton).toHaveBeenCalledTimes(1);
    });
});
