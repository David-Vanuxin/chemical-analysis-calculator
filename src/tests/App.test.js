import { render, screen } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux';
import {store} from "../redux/store"

import renderer from 'react-test-renderer';

describe('Начальная страница', () => {
  test('Рендерится заголовок', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByText(/Калькулятор/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Рендерится кнопка', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByText(/Старт/i);
    expect(linkElement).toBeInTheDocument();
  });
})


it('Рендеринг первой страницы', () => {
  const tree = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});