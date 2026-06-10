import { DateTime } from 'luxon';

export interface Post {
  id: string;
  author: string;
  title: string;
  date: DateTime;
  content: string;
}
