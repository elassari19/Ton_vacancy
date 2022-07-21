type Ivacancy = {
  vacancy: string;
  category: string;
  description: string;
  salary: {
      delay: string;
      from: number;
      to: number;
  };
  options: {
    'Full employment': boolean;
    'Underemployment': boolean;
    'Without experience': boolean;
    'Project work': boolean;
};
}

export default Ivacancy;