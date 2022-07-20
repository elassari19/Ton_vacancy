type Ivacancy = {
<<<<<<< HEAD
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
=======
  vacancy: string,
  category: string[],
  description: string,
  salary: {
    delay: string,
    from: number,
    to: number
  },
  options: {
    Full_employment: boolean,
    Underemployment: boolean,
    Without_experience: boolean,
    Project_work: boolean,
  }
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
}

export default Ivacancy;