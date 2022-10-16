export interface ResponseData {
  data: {
    title: string;
    status: number;
    errors: string[];
  };
  status: number;
}
