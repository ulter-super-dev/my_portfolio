import { ISkill } from '../ISkill';

export const SKILLS_DATA: ISkill[] = [
  {
    type: 'Programming Language',
    names: [
      "Node.js", "Typescript", "PHP", "python", "java", "C#", 'HTML5', 'XML', 'CSS', 'SASS', 'Less']
  },
  {
    type: 'Backend',
    names: [
      'Express.js', 'Spring MVC', 'Spring Boot', 'ASP.NET', 'Laravel', 'Symfony', 'Django'
    ]
  },
  {
    type: 'Frontend',
    names: [
      'Angular', 'React.js', 'Vue.js', 'Next.js', 'Nuxt.js'
    ]
  },
  {
    type: 'Database & ORM',
    names: [
      'SQL Server', 'MongoDB', 'Entity Framework', 'Mongoose'
    ]
  },
  {
    type: 'Cloud',
    names: [
      'Azure Web Service & Storage', 'Firebase DB & Functions', 'Heroku'
    ]
  },
  {
    type: 'Testing',
    names: [
      'Jest', 'Mocha'
    ]
  },
  {
    type: 'Others',
    names: [
      'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0', 'Jenkins', 'Travis CI', 'JIRA', 'Confluence'
    ]
  },
];
