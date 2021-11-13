import httpService from './httpService';
import Axios from 'axios';

export const eventsService = {
  query,
}

async function query(filterBy = {}) {
  const endPoint = `${filterBy.month}/${filterBy.day}`;
  return httpService.get(endPoint);
}

