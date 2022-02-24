type Iinfo = {
  name: string;
  category: string;
  description: string;
  phone: string;
  email: string;
  telegram: string;
  city: string;
  benfits: {
      events: boolean;
      insurance: boolean;
      bonus: boolean;
      review: boolean;
      discount: boolean;
      schedule: boolean;
  };
}

export type infoAction = {
  type: string;
  payload: Iinfo;
}

export default Iinfo