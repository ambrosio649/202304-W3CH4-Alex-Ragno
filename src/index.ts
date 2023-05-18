/* eslint-disable no-new */
import { Header } from './components/header';
import { SeriesList } from './components/series.list';
import { WatchedSeriesList } from './components/watchedSeries.list';

new Header('.header-container', "Alex's Series");
new SeriesList('.series-list');
new WatchedSeriesList('.series-list--watched');
