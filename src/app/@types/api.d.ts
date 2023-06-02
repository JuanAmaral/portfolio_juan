declare interface IProject {
  dateString: string;
  title: string;
  description: string;
  linkURL?: string;
  imageNext?: string | StaticImport;
}
declare interface IProjects {
  project1?: IProject;
  project2?: IProject;
}


