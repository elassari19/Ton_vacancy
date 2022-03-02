type Iinfo = {
  name: string;
  category: string;
  description: string;
  phone: number | string;
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

export default Iinfo