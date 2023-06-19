declare interface IProject {
  dateString: string;
  title: string;
  description: string;
  linkURL?: string;
  imageNext?: StaticImageData; 
  image2:  StaticImageData; 
  image3:  StaticImageData; 
  image4:  StaticImageData; 
  image5:  StaticImageData; 
  typeProduct: string;
  tecnologies: string;
}
declare interface IProjects {
  project1?: IProject;
  project2?: IProject;
}


