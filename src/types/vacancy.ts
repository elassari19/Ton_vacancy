type Ivacancy = {
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
}

export default Ivacancy;