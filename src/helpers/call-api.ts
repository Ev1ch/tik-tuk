import { API_ROOT, HttpMethods } from 'common';

type TBody = any;

type THeader = Headers | string[][] | Record<string, string> | undefined;

type IQuery = {
  [key: string]: string | number;
};

interface IRequestArgs {
  endpoint: string;
  method?: string;
  query?: IQuery;
  body?: TBody;
}

interface IRequestInit {
  method: string;
  headers: THeader;
  body?: FormData | string;
}

const getQuery = (query: IQuery) =>
  Object.keys(query).reduce(
    (string, key, index) => `${string}${index === 0 ? '?' : '&'}${key}=${query[key]}`,
    '',
  );

const getUrl = ({ endpoint, query }: IRequestArgs): RequestInfo =>
  API_ROOT + endpoint + (query ? getQuery(query) : '');

const getArgs = (args: IRequestArgs): RequestInit => {
  const headers: THeader = {};
  let body: TBody | null = null;

  headers['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY as string;

  if (args.body) {
    if (args.method === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
    headers.Accept = 'application/json';
  }

  return {
    method: args.method || HttpMethods.GET,
    headers,
    ...(args.method === 'POST' && body ? { body } : {}),
  } as IRequestInit;
};

const callApi = async (args: IRequestArgs): Promise<Response> => fetch(getUrl(args), getArgs(args));

export default callApi;
